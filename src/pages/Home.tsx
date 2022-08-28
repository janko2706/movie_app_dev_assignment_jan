import React from 'react';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import SlideOne from '../components/CarouselSlides/SlideOne';
import SlideThree from '../components/CarouselSlides/SlideThree';
import SlideTwo from '../components/CarouselSlides/SlideTwo';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
import Thumb from '../components/Thumb';
import NoImage from '../images/no_image.jpg';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { Movie } from '../API';

type State = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

type Props = {
    state: State,
    isLoading: boolean,
    isError: boolean,
    setIsLoadingMore:  React.Dispatch<React.SetStateAction<boolean>>,
    handleFavouritesClick: (movie: Movie) => void;
}

const Home: React.FC<Props> = ({state, isError, isLoading, setIsLoadingMore, handleFavouritesClick}) => {

    if (isError) return <div>Something went wrong ...</div>;

    return (
        <>
            <Carousel>
                <SlideOne/>
                <SlideTwo/>
                <SlideThree/>
            </Carousel>
            <Grid header={'Popular movies'}>
        {state.results.map(movie => (
            <Thumb
                key={movie.id}
                clickable
                image={
                movie.poster_path ?
                    IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                :
                    NoImage
                }
                movieId={movie.id}
                isFavourite={movie.isFavourite}
                handleFavouritesClick={() => handleFavouritesClick(movie)}
            />
            ))}
        </Grid>
        {isLoading && <Spinner/>}
        {state.page < state.total_pages && !isLoading && (
            <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
        )}
        </>
    )
}

export default Home