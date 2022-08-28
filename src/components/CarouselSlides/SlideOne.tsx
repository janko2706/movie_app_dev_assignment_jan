import * as React from "react";
import excitinMoviePosterCarousel from '../../images/excitinMoviePosterCarousel.jpg';
import { Link } from 'react-router-dom';

const SlideOne = () => (
    <div className="d-flex bg-dark  justify-content-evenly">
        <div className="d-flex flex-column justify-content-evenly">
            <div className="p-5">
                <h1>
                    Discover exciting movies
                </h1>
                <p>
                    Adventures, thrillers and more..
                </p>
            </div>
            <Link to={'/discovery'} className="btn btn-primary">Discover movies</Link>
        </div>
        <img src={excitinMoviePosterCarousel} alt="carousel slide one" />
    </div>
);

export default SlideOne;