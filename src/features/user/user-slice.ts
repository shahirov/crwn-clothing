import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthUser {
  id: string
  email: string
  displayName: string
  createdAt: number
}

interface UserState {
  currentUser: AuthUser | null
}

const initialState: UserState = {
  currentUser: null
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state: UserState, action: PayloadAction<AuthUser | null>) {
      state.currentUser = action.payload
    }
  }
})

export default user.reducer

export const { setCurrentUser } = user.actions
