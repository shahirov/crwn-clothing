import React from 'react'

import { Button } from './custom-button.styles'

type CustomButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  color?: 'blue' | 'green'
  signIn?: boolean
  signUp?: boolean
  handleClick?: () => Promise<firebase.auth.UserCredential>
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color,
  handleClick,
  type,
  children,
  ...otherProps
}) => (
  <Button color={color} type={type} onClick={handleClick} {...otherProps}>
    {children}
  </Button>
)

export default CustomButton
