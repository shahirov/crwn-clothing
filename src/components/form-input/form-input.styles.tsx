import styled from 'styled-components'

type InputLabelProps = {
  value: string
}

export const Group = styled.div`
  position: relative;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 25px;
`

export const ErrorMsg = styled.div`
  margin: 0;
  padding-bottom: 15px;
  font-weight: 700;
  color: #ff0000;
`

export const InputLabel = styled.label`
  color: ${(props: InputLabelProps) => (props.value.length > 0 ? 'black' : 'grey')};
  font-size: ${(props: InputLabelProps) => (props.value.length > 0 ? '12px' : '16px')};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: ${(props: InputLabelProps) => (props.value.length > 0 ? '-14px' : '10px')};
  transition: 300ms ease all;
`

export const Input = styled.input`
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  @media screen and (max-width: 800px) {
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${InputLabel} {
    top: -14px;
    font-size: 12px;
    color: black;
  }

  &[type='password'] {
    letter-spacing: 0.3em;
  }
`
