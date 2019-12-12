import styled from 'styled-components'

type ButtonProps = {
  color?: 'blue' | 'green'
  signUp?: boolean
  signIn?: boolean
}

export const Button = styled.button`
  color: white;
  background-color: ${({ color }: ButtonProps) => (color === 'blue' ? '#3b5998' : '#1db954')};
  width: ${(props) => (props.signUp ? '320px' : '')};
  margin: ${(props) => (props.signUp ? '0 auto' : '')};

  &:hover {
    background-color: ${({ color }: ButtonProps) => (color === 'blue' ? '#3a61b3' : '#1ed760')};
  }
`
