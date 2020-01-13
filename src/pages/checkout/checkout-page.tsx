import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper, CheckoutHeader, HeaderBlock, Total } from './checkout-page.styles'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import { selectCartItems, selectCartItemsTotalPrice } from '../../slices/cart-slice'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartItemsTotalPrice)

  return (
    <Wrapper>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>TOTAL: ${total}</Total>
    </Wrapper>
  )
}

export default CheckoutPage
