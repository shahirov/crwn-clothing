import styled from 'styled-components'

interface ImageProps {
  imageUrl: string
}

interface WrapperProps {
  size?: string
}

export const Image = styled.img`
  width: 100%;
  height: 95%;
  background-image: ${(props: ImageProps) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`

export const Wrapper = styled.div`
  position: relative;
  width: ${(props: WrapperProps) => (props.size === 'large' ? '100%' : '22%')};
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  & button {
    position: absolute;
    top: 255px;
    display: none;
    align-items: center;

    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
  }

  :hover {
    ${Image} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    :hover {
      ${Image} {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
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
