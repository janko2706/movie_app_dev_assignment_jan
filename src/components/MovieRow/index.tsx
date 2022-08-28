import React, { useRef } from 'react';
//styles
import styled from "styled-components";
const Wrapper = styled.div`
    margin: 30px 0;
    overflow: hidden;
    position: relative;

    
    h1 {
        color: var(--white);
        
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
    .row{
        overflow-x: hidden;
    }
    .row:hover .overlay-right-scroll{
        opacity: 1 ;
    }
    .row:hover .overlay-left-scroll{
        opacity: 1 ;
    }
    .overlay-left-scroll {
        position: absolute;
        cursor: pointer;
        z-index: 999;
        background: rgba(0, 0, 0, 0.8);
        height: 80%;
        width: 40px;
        transition: 0.5s ease-in-out;
        opacity: 0;
        bottom: 0;
        border-radius: 20px;
        font-size: 20px;
        color: white;
        padding: 20px;
        text-align: center;
    }
    .overlay-right-scroll{
        position: absolute;
        cursor: pointer;
        border-radius: 20px;
        z-index: 999;
        background: rgba(0, 0, 0, 0.8);
        height: 80%;
        width: 40px;
        transition: 0.5s ease-in-out;
        opacity: 0;
        bottom: 0;
        right: 0;
        font-size: 20px;
        color: white;
        padding: 20px;
        text-align: center;
    }
    @media screen and (max-width: 1000px) {
        .row{
            overflow-x: scroll;
        }
        .row:hover .overlay-right-scroll{
            opacity: 0 ;
        }
        .row:hover .overlay-left-scroll{
            opacity: 0 ;
        }
            }
    `;

    // Types
    type Props = {
    header: string,
    children: any
    }

const MovieRow: React.FC<Props> = ({ header, children }) => {
    const ref: any = useRef<HTMLDivElement>();

    const scrollLeft = (event: React.MouseEvent) =>{
        const container: HTMLDivElement = ref.current;
        const containerScrollPosition = ref.current.scrollLeft;

        container.scrollTo({
            top: 0,
            left: containerScrollPosition - 800,
            behavior: 'smooth',
        });
    }
    const scrollRight = (event: React.MouseEvent) =>{
        const container: HTMLDivElement = ref.current;
        const containerScrollPosition = ref.current.scrollLeft;

        container.scrollTo({
            top: 0,
            left: containerScrollPosition + 800,
            behavior: 'smooth',
        });
    }

    return (
        <>
        <Wrapper>
            <h1>{header}</h1>
            <div className='row' ref={ref}>
                {children}
                <div className='d-flex align-items-center justify-content-center overlay-left-scroll'  onClick={scrollLeft}>
                    <i className="bi bi-arrow-left">
                    </i>
                </div>
                <div className='d-flex align-items-center justify-content-center overlay-right-scroll'  onClick={scrollRight}>
                    <i className="bi bi-arrow-right">
                    </i>
                </div>
            </div>

        </Wrapper>
        </>
    );
};

export default MovieRow;