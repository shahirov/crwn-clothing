import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { takeLatest, put, call, all } from 'redux-saga/effects'
import { User } from 'firebase'

import { RootState } from '../redux/rootReducer'
import firebase from '../firebase/firebase'

interface SnapshotData {
  displayName: string
  email: string
  createdAt: firebase.firestore.Timestamp
}

export interface AuthUser {
  id?: string
  email: string | null
  displayName: string
  createdAt: number | string | undefined
  uid?: string
}

interface UserState {
  currentUser: AuthUser | User | null
  error: string
}

const initialState: UserState = {
  currentUser: null,
  error: ''
}

const selectUser = (state: RootState) => state.user
export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser)

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    emailSignInStart(
      state: UserState,
      action: PayloadAction<{ email: string; password: string }>
    ) {},
    signInSuccess(state: UserState, action: PayloadAction<AuthUser>) {
      state.currentUser = action.payload
      state.error = ''
    },
    signOutStart() {},
    signOutSuccess(state: UserState) {
      state.currentUser = null
    },
    checkUserSession() {},
    googleSignInStart() {},
    signUpStart(
      state: UserState,
      action: PayloadAction<{ email: string; password: string; displayName: string }>
    ) {},
    signUpSuccess(
      state: UserState,
      action: PayloadAction<{
        user: User
        additionalData?: string
      }>
    ) {
      state.currentUser = {
        email: action.payload.user.email,
        displayName: action.payload.additionalData ? action.payload.additionalData : '',
        createdAt: action.payload.user.metadata.creationTime,
        uid: action.payload.user.uid
      }
    },
    signFailure: (state: UserState, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export default user.reducer

export const {
  signInSuccess,
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signOutStart,
  signOutSuccess,
  signUpStart,
  signUpSuccess,
  signFailure
} = user.actions

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
        displayName: displayName
      })
    )
  } catch (error) {
    yield signFailure(error.message)
  }
}

function* signInAfterSignUp({
  payload: { user, additionalData }
}: ReturnType<typeof signUpSuccess>) {
  yield getSnapshotFromUserAuth(user, { displayName: additionalData ? additionalData : '' })
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
