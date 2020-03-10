import React from 'react'
import firebase from 'firebase'

import { Button } from './styles'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  color?: 'blue' | 'green' | 'default'
  name?: 'signin' | 'signup' | 'default'
  handleClick?: () => Promise<firebase.auth.UserCredential> | void
}

export const CustomButton: React.FC<Props> = ({ handleClick, children, ...otherProps }) => (
  <Button onClick={handleClick} {...otherProps}>
    {children}
  </Button>
)
