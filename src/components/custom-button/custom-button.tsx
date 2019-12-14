import React from 'react'

import { Button } from './custom-button.styles'

type CustomButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  color?: 'blue' | 'green' | 'default'
  name?: 'signin' | 'signup' | 'default'
  handleClick?: () => Promise<firebase.auth.UserCredential>
}

const CustomButton: React.FC<CustomButtonProps> = ({ handleClick, children, ...otherProps }) => (
  <Button onClick={handleClick} {...otherProps}>
    {children}
  </Button>
)

export default CustomButton
