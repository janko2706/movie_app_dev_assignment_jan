import React from 'react';
import styled from "styled-components"; 


interface Props {
    children: JSX.Element[];
}

interface ICarouselSlide {
    active?: boolean;
}
interface ICarouselProps {
    currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
    display: flex;
    ${({currentSlide}: ICarouselProps) =>
        currentSlide &&
        `
        transform: translateX(-${currentSlide * 100}vw);
        `};
    transition: all 0.5s ease;
`;

const SCarouselSlide = styled.div<ICarouselSlide>`
    flex: 0 0 auto;
    opacity: ${({active}:ICarouselSlide)  => (active ? 1 : 0)};
    transition: all 0.5s ease;
    width: 100vw;
    height:fit-content;
    min-height: 200px;
    h1{
        text-align: center;
    }
    img{
        width: 30em;
    }
    @media (max-width: 768px) {
        word-break: break-word;
        img{
            display: none;
        }
    }
`;

const CarouselButtons = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    i{
        font-size: 2rem;
        color: grey;
        opacity: 0.5;
        margin-left: 10px;
        transition: all .6s ease-in-out;
    }
    i:hover{
        opacity: 1;
        cursor: pointer;
    }
`;

const Carousel = ({ children }: Props) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const activeSlide = children.map((slide, slideIdx) => (
            <SCarouselSlide  active={currentSlide === slideIdx} key={slideIdx}>
                {slide}
            </SCarouselSlide>
    ));
    
    return (
    <div>
        <div className='d-flex overflow-hidden'>
            <SCarouselSlides currentSlide={currentSlide}>
                {activeSlide}
            </SCarouselSlides>
        </div>
        <CarouselButtons>
            <i
                onClick={() => {
                setCurrentSlide(0);
                }}
                className="bi bi-circle-fill"
            >
            </i>
            <i
                onClick={() => {
                setCurrentSlide(1);
                }}
                className="bi bi-circle-fill"
            >
            </i>
            <i
                onClick={() => {
                setCurrentSlide(2);
                }}
                className="bi bi-circle-fill"
            >
            </i>
        </CarouselButtons>
    </div>
    );
    };
    

export default Carousel;