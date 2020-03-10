import firebase, { User } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { config } from './config'
import { AuthUser, CollectionItem } from '../types'

interface Document {
  title: string
  items: CollectionItem[]
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async (
  userAuth: User | AuthUser,
  metadata?: { displayName: string }
) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
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

export const addCollectionAndDocuments = async (
  collectionName: string,
  documentsToAdd: Document[]
): Promise<void> => {
  const collectionRef = firestore.collection(collectionName)

  const batch = firestore.batch()

  documentsToAdd.forEach((obj: any) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections: firebase.firestore.QuerySnapshot) => {
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

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ promt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
