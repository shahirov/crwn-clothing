import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import { Wrapper, Items, Title } from './collection-page.styles'
import { RootState } from '../../../app/rootReducer'
import { makeSelectCollection } from '../shop-selectors'
import CollectionItem from '../../../components/collection-item/collection-item'

const CollectionPage = () => {
  const { categoryId } = useParams()

  const selectCollections = makeSelectCollection(categoryId!)
  const collection = useSelector((state: RootState) => selectCollections(state))
  const { title, items } = collection

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} size="large" />
        ))}
      </Items>
    </Wrapper>
  )
}

export default CollectionPage
