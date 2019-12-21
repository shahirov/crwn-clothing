import React, { useEffect, useState } from 'react'
import { Route, useRouteMatch } from 'react-router'
import { useDispatch } from 'react-redux'

import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../../components/collection-page/collection-page'
import firebase from '../../firebase/firebase'
import { updateCollections } from '../../slices/shop-slice'

const ShopPage = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const collectionRef = firebase.firestore.collection('collections')

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = await firebase.convertCollectionsSnapshotToMap(snapshot)
      dispatch(updateCollections(collectionsMap))

      setLoading(false)
    })

    return () => unsubscribeFromSnapshot()
  }, [dispatch])

  return (
    <main>
      <Route exact path={match.path} render={() => <CollectionsOverview isLoading={loading} />} />
      <Route
        exact
        path={`${match.path}/:categoryId`}
        render={() => <CollectionPage isLoading={loading} />}
      />
    </main>
  )
}
export default ShopPage
