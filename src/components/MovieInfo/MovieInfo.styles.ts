import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
// Types
type Props = {
  backdrop: string,
}

export const Wrapper = styled.div<Props>`
  background: ${( backdrop: Props ) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'
  };
  background-size: cover;
  background-position: center;
  animation: animateMovieInfo 1s;
  .manageFavorites{
    position: absolute;
    right: 0;
    cursor: pointer;
    background-color: var(--medGrey);
    text-decoration: none;
    border: none;
    border-radius: 10px;
    margin: 10px;
    padding: 1em;
    transition:all 2s ease-in-out ;

  }
  @keyframes animatedMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 10px;
    padding: 2em;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
