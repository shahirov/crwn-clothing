import React from 'react'
import { useSelector } from 'react-redux'

import withSpinner from '../withSpinner/withSpinner'
import { Wrapper } from './collections-overview.styles'
import CollectionPreview from '../collection-preview/collection-preview'
import { selectCollectionsForPreview } from '../../slices/shop/selectors'

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview)

  return (
    <Wrapper>
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </Wrapper>
  )
}

export default withSpinner(CollectionsOverview)
