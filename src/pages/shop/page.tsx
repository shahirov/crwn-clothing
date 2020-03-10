import React, { Suspense, useEffect } from 'react'
import { Route, useRouteMatch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCollectionsStart } from '../../features/shop/slice'
import { RootState } from '../../store/rootReducer'
import { Spinner } from '../../components/spinner'

const CollectionPage = React.lazy(() => import('../collection'))
const CollectionsOverview = React.lazy(() => import('../../components/collections-overview'))

export const ShopPage = () => {
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
