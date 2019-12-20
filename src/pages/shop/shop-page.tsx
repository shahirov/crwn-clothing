import React from 'react'
import { Route, useRouteMatch } from 'react-router'

import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../../components/collection-page/collection-page'

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
