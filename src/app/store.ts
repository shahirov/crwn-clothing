import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { ThunkAction } from 'redux-thunk'

import persistedReducer, { RootState } from './rootReducer'

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        // Fixes 'non-serializable value...' error message that caused by redux-persist library
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  ]
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
