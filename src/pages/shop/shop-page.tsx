import React from 'react'
import { Route, useRouteMatch } from 'react-router'

import CollectionsOverview from '../../features/shop/collections-overview/collections-overview'
import CollectionPage from '../../features/shop/collection-page/collection-page'

const ShopPage = () => {
  const match = useRouteMatch()

  return (
    <main>
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
    </main>
  )
}
export default ShopPage
