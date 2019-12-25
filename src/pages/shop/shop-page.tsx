import React, { Suspense, useEffect } from 'react'
import { Route, useRouteMatch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCollectionsStart } from '../../slices/shop-slice'
import { RootState } from '../../redux/rootReducer'
import Spinner from '../../components/spinner/spinner'

const CollectionPage = React.lazy(() => import('../collection/collection-page'))
const CollectionsOverview = React.lazy(() =>
  import('../../components/collections-overview/collections-overview')
)

const ShopPage = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()

  const loading = useSelector((state: RootState) => state.shop.isFetching)

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

  return (
    <main>
      <Suspense fallback={<Spinner />}>
        <Route exact path={match.path} render={() => <CollectionsOverview isLoading={loading} />} />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          render={() => <CollectionPage isLoading={loading} />}
        />
      </Suspense>
    </main>
  )
}
export default ShopPage
