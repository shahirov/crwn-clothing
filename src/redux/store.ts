import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import persistedReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        // Fixes 'non-serializable value...' error message that caused by redux-persist library
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
    sagaMiddleware
  ]
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store
