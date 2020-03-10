import { takeLatest, all, put, call } from 'redux-saga/effects'

import { clearCart } from './slice'
import { signOutSuccess } from '../user/slice'

function* clearCartOnSignOut() {
  yield put(clearCart())
}

function* watchClearCartOnSignOut() {
  yield takeLatest(signOutSuccess.type, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([call(watchClearCartOnSignOut)])
}
