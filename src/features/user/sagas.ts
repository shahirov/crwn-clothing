import { takeLatest, put, call, all } from 'redux-saga/effects'

import { firebase } from '../../lib/firebase'
import { AuthUser } from '../../lib/types'
import { User } from 'firebase'
import {
  signOutSuccess,
  signOutStart,
  signUpStart,
  signUpSuccess,
  signInSuccess,
  signFailure,
  emailSignInStart,
  checkUserSession,
  googleSignInStart
} from './slice'

interface SnapshotData {
  displayName: string
  email: string
  createdAt: firebase.firestore.Timestamp
}

function* getSnapshotFromUserAuth(userAuth: User | AuthUser, metadata?: { displayName: string }) {
  try {
    const userRef = yield call(firebase.createUserProfileDocument, userAuth, metadata)
    const userSnapshot = yield userRef.get()
    const { displayName, email, createdAt } = userSnapshot.data() as SnapshotData
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        createdAt: createdAt.toMillis(),
        displayName,
        email
      })
    )
  } catch (error) {
    yield put(signFailure(error.message))
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield firebase.getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(signFailure(error.message))
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield firebase.signInWithGoogle()
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signFailure(error.message))
  }
}

function* signInWithEmailAndPassword({ payload }: ReturnType<typeof emailSignInStart>) {
  try {
    const { user } = yield firebase.auth.signInWithEmailAndPassword(payload.email, payload.password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signFailure(error.message))
  }
}

function* signOut() {
  try {
    yield firebase.auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signFailure(error.message))
  }
}

function* signUp({ payload: { email, password, displayName } }: ReturnType<typeof signUpStart>) {
  try {
    const { user } = yield firebase.auth.createUserWithEmailAndPassword(email, password)
    yield put(
      signUpSuccess({
        user: user,
        additionalData: { displayName }
      })
    )
  } catch (error) {
    yield signFailure(error.message)
  }
}

function* signInAfterSignUp({
  payload: { user, additionalData }
}: ReturnType<typeof signUpSuccess>) {
  yield getSnapshotFromUserAuth(user, additionalData)
}

function* watchIsUserAuthenticated() {
  yield takeLatest(checkUserSession.type, isUserAuthenticated)
}

function* watchSignInWithGoogle() {
  yield takeLatest(googleSignInStart.type, signInWithGoogle)
}

function* watchSignInWithEmailAndPassword() {
  yield takeLatest(emailSignInStart.type, signInWithEmailAndPassword)
}

function* watchSignOut() {
  yield takeLatest(signOutStart.type, signOut)
}

function* watchSignUp() {
  yield takeLatest(signUpStart.type, signUp)
}

function* watchSignInAfterSignUp() {
  yield takeLatest(signUpSuccess.type, signInAfterSignUp)
}

export function* userSagas() {
  yield all([
    call(watchSignInWithGoogle),
    call(watchSignInWithEmailAndPassword),
    call(watchIsUserAuthenticated),
    call(watchSignOut),
    call(watchSignUp),
    call(watchSignInAfterSignUp)
  ])
}
