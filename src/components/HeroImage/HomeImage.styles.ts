import styled from 'styled-components';
// Types
type Props = {
  image: string
}

export const Wrapper = styled.div<Props>`
  background: linear-gradient(
    to bottom, rgba(450, 0, 0, 0) 41%,
    rgba(450, 0, 0, 0.65) 100%
  ),
  url(${({ image }: Props) => image }), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: 30em;
  position: relative;

`;

export const Content = styled.div`
  background-color: transparent;
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);
  background-color: transparent;


  h1 {
    background-color: transparent;
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    background-color: transparent;
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
