import { useEffect, useState } from 'react'

import { firebase } from '../firebase'

export interface AuthUser {
  id: string
}

export const useAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await firebase.createUserProfileDocument(userAuth)

        userRef?.onSnapshot((snapshot) => {
          setAuthUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setAuthUser(userAuth)
      }
    })

    return () => unsubscribe()
  }, [])

  return authUser
}
