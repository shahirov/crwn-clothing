import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper } from './collections-overview.styles'
import { RootState } from '../../../app/rootReducer'
import { selectCollectionsForPreview } from '../shop-selectors'
import CollectionPreview from '../../../components/collection-preview/collection-preview'

const CollectionsOverview = () => {
  const collections = useSelector((state: RootState) => selectCollectionsForPreview(state))

  return (
    <Wrapper>
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </Wrapper>
  )
}

export default CollectionsOverview
