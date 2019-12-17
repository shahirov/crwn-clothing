import React from 'react'

import { Wrapper, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/rootReducer'
import { selectCartItems, selectCartItemsTotalPrice } from '../cart-selectors'
import CheckoutItem from '../../../components/checkout-item/checkout-item'

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => selectCartItems(state))
  const total = useSelector((state: RootState) => selectCartItemsTotalPrice(state))

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
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
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

export default Checkout
