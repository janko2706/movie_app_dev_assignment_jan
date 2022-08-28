import * as React from "react";
import { Link } from "react-router-dom";
import newMoviePosterCarousel from '../../images/newMoviePosterCarousel.jpg'

const SlideTwo = () => (
    <div className="d-flex bg-dark  justify-content-evenly">
        <div className="d-flex flex-column justify-content-evenly">
            <div className="p-5">
                <h1>
                    Check out what is new
                </h1>
                <p>
                    Discover freshly added movies.
                </p>
            </div>
            <Link to={'/new'} className="btn btn-primary">New movies</Link>
        </div>
        <img src={newMoviePosterCarousel} alt="carousel slide two"/>
    </div>
);

export default SlideTwo;