import React from 'react';
import { useParams } from 'react-router';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//components
import BreadCrumb from '../components/BreadCrumb/index';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
import MovieInfo from '../components/MovieInfo';
import MovieInfoBar from '../components/MovieInfoBar';
import Actor from '../components/Actor/Actor';
//hook
import { useMovieFetch } from '../hooks/useMovieFetch';
//image
import NoImage from '../images/no_image.jpg';
//types
import { Movie as MovieType } from '../API'

type Props= {
  favouriteMovies: MovieType[],
  handleFavouritesClick: (movie: MovieType) => void,
}

const Movie: React.FC<Props> = ({ favouriteMovies, handleFavouritesClick }) => {
  const { movieId } = useParams() as any;
  const { state , loading, error } = useMovieFetch(movieId);
  

  if (loading) return <Spinner/>;
  if (error) return <div>Something went wrong ...</div>;
  if(state?.movie === undefined){
    console.log(movieId);
    return(
      <div className='text-danger'>Something went wrong, please try again.</div>
    )
  }

  return (
    <>
      <BreadCrumb movieTitle={state.movie.original_title} />
      <MovieInfo movie={state.movie} handleFavouritesClick={()=>handleFavouritesClick(state.movie)} AllFavouriteMovies={favouriteMovies}/>
      <MovieInfoBar
        time={state.movie.runtime}
        budget={state.movie.budget}
        revenue={state.movie.revenue}
      />
{state.actors &&  <Grid header='Actors'>
        {state.actors.map(actor => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage
            }
          />
        ))}
      </Grid>}
    </>
  );
};

export default Movie;
