import React, { useEffect } from 'react'
import { Route, useRouteMatch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../../components/collection-page/collection-page'
import { fetchCollectionsStart } from '../../slices/shop-slice'
import { RootState } from '../../redux/rootReducer'

const ShopPage = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()

  const loading = useSelector((state: RootState) => state.shop.isFetching)

  useEffect(() => {
    dispatch(fetchCollectionsStart())
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
