import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper } from './collections-overview.styles'
import { RootState } from '../../redux/rootReducer'
import CollectionPreview from '../collection-preview/collection-preview'
import { selectCollectionsForPreview } from '../../slices/shop-slice'

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
