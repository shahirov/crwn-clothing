import styled from 'styled-components'

type ImageProps = {
  imageUrl: string
}

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-image: ${(props: ImageProps) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`

export const Wrapper = styled.div`
  position: relative;
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  & button {
    position: absolute;
    top: 255px;
    display: none;
    align-items: center;
  }

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const Price = styled.span`
  width: 10%;
`
