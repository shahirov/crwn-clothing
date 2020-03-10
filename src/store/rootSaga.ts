import { all, call } from 'redux-saga/effects'

import { watchFetchCollectionsAsync } from '../features/shop/sagas'
import { userSagas } from '../features/user/sagas'
import { cartSagas } from '../features/cart/sagas'

export function* rootSaga() {
  yield all([call(watchFetchCollectionsAsync), call(userSagas), call(cartSagas)])
}
