import * as React from "react";
import favouriteMoviePosterCarousel from '../../images/favouriteMoviePosterCarousel.jpg';


const SlideThree = () => (
    <div className="d-flex bg-dark  justify-content-evenly">
        <div className="d-flex flex-column justify-content-evenly">
            <div className="p-5">
                <h1>
                    Save your favourite movies
                </h1>
                <p>
                    A list of all your favourite movies.
                </p>
            </div>
        </div>
        <img src={favouriteMoviePosterCarousel} alt="carousel slide one" />
    </div>
);

export default SlideThree;