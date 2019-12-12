import React from 'react'
import { User } from 'firebase'

import { firebase } from './firebase'

interface FirebaseContextProps {
  firebase: typeof firebase
  user: User | null
}

export const FirebaseContext = React.createContext<FirebaseContextProps>({
  firebase,
  user: null
})
