import { all, call } from 'redux-saga/effects'

import { watchFetchCollectionsAsync } from '../slices/shop/sagas'
import { userSagas } from '../slices/user/sagas'
import { cartSagas } from '../slices/cart/sagas'

export function* rootSaga() {
  yield all([call(watchFetchCollectionsAsync), call(userSagas), call(cartSagas)])
}
