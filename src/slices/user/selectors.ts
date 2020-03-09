import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store/rootReducer'

const selectUser = (state: RootState) => state.user
export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser)
