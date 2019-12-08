import React from 'react'

import { Wrapper, ItemContent, ItemSubtitle, ItemTitle, BgImage } from './menu-item.styles'

type MenuItemProps = {
  title: string
  imageUrl: string
  size?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => {
  return (
    <Wrapper size={size}>
      <BgImage imageUrl={imageUrl} />
      <ItemContent>
        <ItemTitle>{title.toUpperCase()}</ItemTitle>
        <ItemSubtitle>SHOP NOW</ItemSubtitle>
      </ItemContent>
    </Wrapper>
  )
}
export default MenuItem
