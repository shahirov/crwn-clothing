import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper } from './styles'
import { withSpinner } from '../../lib/hoc'
import { CollectionPreview } from '../collection-preview'
import { selectCollectionsForPreview } from '../../features/shop/selectors'

export const CollectionsOverview = withSpinner(() => {
  const collections = useSelector(selectCollectionsForPreview)

  return (
    <Wrapper>
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </Wrapper>
  )
})
