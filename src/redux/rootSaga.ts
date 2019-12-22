import { all, call } from 'redux-saga/effects'

import { watchFetchCollectionsAsync } from '../slices/shop-slice'
import { userSagas } from '../slices/user-slice'
import { cartSagas } from '../slices/cart-slice'

function* rootSaga() {
  yield all([call(watchFetchCollectionsAsync), call(userSagas), call(cartSagas)])
}

export default rootSaga
