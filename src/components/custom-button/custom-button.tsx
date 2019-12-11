import React from 'react'

import { Button } from './custom-button.styles'

type CustomButtonProps = {
  color?: 'blue' | 'green'
}

const CustomButton: React.FC<CustomButtonProps> = ({ color, children, ...otherProps }) => (
  <Button color={color} {...otherProps}>
    {children}
  </Button>
)

export default CustomButton
