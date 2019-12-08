import React, { useState } from 'react'
import SHOP_DATA from './shop-data'

import CollectionPreview from '../../components/collection-preview/collection-preview'

const Shop = () => {
  const [collections] = useState(Object.values(SHOP_DATA))

  return (
    <main>
      <h1>Collections</h1>
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </main>
  )
}
export default Shop
