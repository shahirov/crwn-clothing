import { useEffect, useState } from 'react'

import { firebase } from '../firebase'

export type FirebaseUser = firebase.User | null

export const useAuth = () => {
  const [authUser, setAuthUser] = useState<FirebaseUser>(null)

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => setAuthUser(user))

    return () => unsubscribe()
  }, [])

  return authUser
}
