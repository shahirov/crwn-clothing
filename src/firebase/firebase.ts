import app from 'firebase/app'
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

  async signInWithGoogle() {
    return this.auth.signInWithPopup(this.provider)
  }
}

export const firebase = new Firebase()
