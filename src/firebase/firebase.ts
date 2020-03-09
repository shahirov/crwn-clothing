import app, { User } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { config } from './config'
import { CollectionItemProp } from '../slices/shop-slice'
import { AuthUser } from '../slices/user-slice'

interface Document {
  title: string
  items: CollectionItemProp[]
}

class Firebase {
  auth: app.auth.Auth
  firestore: app.firestore.Firestore
  googleProvider: app.auth.GoogleAuthProvider

  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
    this.firestore = app.firestore()
    this.googleProvider = new app.auth.GoogleAuthProvider()

    this.googleProvider.setCustomParameters({ promt: 'select_account' })
  }

  signInWithGoogle = async () => {
    return this.auth.signInWithPopup(this.googleProvider)
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = this.auth.onAuthStateChanged((userAuth) => {
        unsubscribe()
        resolve(userAuth)
      }, reject)
    })
  }

  createUserProfileDocument = async (
    userAuth: User | AuthUser,
    metadata?: { displayName: string }
  ) => {
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

  async addCollectionAndDocuments(
    collectionName: string,
    documentsToAdd: Document[]
  ): Promise<void> {
    const collectionRef = this.firestore.collection(collectionName)

    const batch = this.firestore.batch()

    documentsToAdd.forEach((obj: any) => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })

    return batch.commit()
  }

  convertCollectionsSnapshotToMap(collections: firebase.firestore.QuerySnapshot) {
    const transformedCollections = collections.docs.map(
      (doc: firebase.firestore.DocumentSnapshot) => {
        const { title, items } = doc.data() as firebase.firestore.DocumentData

        return {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title,
          items
        }
      }
    )

    return transformedCollections.reduce((acc: any, collection: { title: string }) => {
      acc[collection.title.toLowerCase()] = collection
      return acc
    }, {})
  }
}

const firebase = new Firebase()

export default firebase
