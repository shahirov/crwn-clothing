import React, { useEffect } from 'react'
import { Route, useRouteMatch } from 'react-router'
import { useDispatch } from 'react-redux'

import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../../components/collection-page/collection-page'
import firebase from '../../firebase/firebase'
import { updateCollections } from '../../slices/shop-slice'

const ShopPage = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    const collectionRef = firebase.firestore.collection('collections')

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = firebase.convertCollectionsSnapshotToMap(snapshot)
      dispatch(updateCollections(collectionsMap))
    })

    return () => unsubscribeFromSnapshot()
  }, [dispatch])

  return (
    <main>
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
    </main>
  )
}
export default ShopPage
