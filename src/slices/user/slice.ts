import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from 'firebase'

export interface AuthUser {
  id?: string
  email: string | null
  displayName: string
  createdAt?: number | string | undefined
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
        additionalData: { displayName: string }
      }>
    ) {
      state.currentUser = {
        email: action.payload.user.email,
        displayName: action.payload.additionalData.displayName,
        createdAt: action.payload.user.metadata.creationTime,
        uid: action.payload.user.uid
      }
    },
    signFailure: (state: UserState, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

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

export const userReducer = user.reducer
