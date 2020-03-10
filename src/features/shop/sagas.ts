import { takeLatest, put, call } from 'redux-saga/effects'

import { firebase } from '../../lib/firebase'
import { fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsFailure } from './slice'

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firebase.firestore.collection('collections')
    const collectionSnapshot = yield collectionRef.get()
    const collectionsMap = yield call(firebase.convertCollectionsSnapshotToMap, collectionSnapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* watchFetchCollectionsAsync() {
  yield takeLatest(fetchCollectionsStart.type, fetchCollectionsAsync)
}
