import styled from "styled-components";

export const ThumbStyle = styled.div`
width: fit-content;
  .image-container {
    position: relative;
    transition: transform 0.2s;
  }

  .image-container:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .image-container:hover .overlay {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    bottom: 0;
    border-radius: 0px 0px 20px 20px;
    font-size: 20px;
    color: white;
    padding: 20px;
    text-align: center;
  }
  img{
    width: 10em;
    max-height: 720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;

    :hover {
      opacity: 0.8;
    }

    @keyframes animateThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  
`;
