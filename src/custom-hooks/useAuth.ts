import { useEffect, useState } from 'react'
import { User } from 'firebase'

import { firebase } from '../firebase'

export const useAuth = () => {
  const [authUser, setAuthUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user)
      }
    })

    return () => unsubscribe()
  }, [])

  return authUser
}
