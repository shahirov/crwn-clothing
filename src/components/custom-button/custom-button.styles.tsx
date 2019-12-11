import styled from 'styled-components'

type ButtonProps = {
  color?: 'blue' | 'green'
}

export const Button = styled.button`
  background-color: ${({ color }: ButtonProps) => (color === 'blue' ? '#3b5998' : '#1db954')};
  color: white;

  &:hover {
    background-color: ${({ color }: ButtonProps) => (color === 'blue' ? '#3a61b3' : '#1ed760')};
  }
`
