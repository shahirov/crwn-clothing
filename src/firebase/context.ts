import React from 'react'

import { FirebaseUser } from '../custom-hooks'

interface FirebaseContextProps {
  user: FirebaseUser
}

export const FirebaseContext: React.Context<Partial<FirebaseContextProps>> = React.createContext({})
