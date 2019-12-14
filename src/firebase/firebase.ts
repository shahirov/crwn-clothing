import app, { User } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import config from './config'

class Firebase {
  auth: app.auth.Auth
  firestore: app.firestore.Firestore
  provider: app.auth.GoogleAuthProvider

  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
    this.firestore = app.firestore()
    this.provider = new app.auth.GoogleAuthProvider()

    this.provider.setCustomParameters({ promt: 'select_account' })
  }

  signInWithGoogle = async () => {
    return this.auth.signInWithPopup(this.provider)
  }

  createUserProfileDocument = async (userAuth: User, metadata?: { displayName: string }) => {
    if (!userAuth) return

    const userRef = this.firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...metadata
        })
      } catch (error) {
        console.error('Error creating user', error.message)
      }
    }

    return userRef
  }
}

const firebase = new Firebase()

export default firebase
