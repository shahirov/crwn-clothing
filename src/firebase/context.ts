import React from 'react'

import { firebase } from './firebase'
import { AuthUser } from '../custom-hooks'

interface FirebaseContextProps {
  firebase: typeof firebase
  user: null | AuthUser
}

export const FirebaseContext = React.createContext<FirebaseContextProps>({
  firebase,
  user: null
})
