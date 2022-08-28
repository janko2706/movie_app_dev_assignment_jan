import React from 'react';
//components
import Thumb from '../Thumb';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//image
import NoImage from '../../images/no_image.jpg';
//styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
// Types
import { Movie } from '../../API';

type Props = {
  movie: Movie,
  handleFavouritesClick: (movie: Movie) => void,
  AllFavouriteMovies: Movie[],

}

const MovieInfo: React.FC<Props> = ({ movie, handleFavouritesClick, AllFavouriteMovies }) => {
  console.log(AllFavouriteMovies);
  movie.isFavourite = false;
  console.log(movie.id);

  AllFavouriteMovies.forEach((item) => {
    console.log(item.id);
    if(item.id === movie.id){
      movie.isFavourite = true;
    }
  })
  
  return(
    <Wrapper backdrop={movie.backdrop_path}>
      <button className="manageFavorites" onClick={() => handleFavouritesClick(movie)}>
        {movie.isFavourite ? 
          <i className='bi bi-heart-fill' style={{color: 'red'}}></i>
        : 
          <i className='bi bi-heart' style={{color: 'white'}} ></i> 
        }
      </button>
      <Content>
        <Thumb
          image={
            movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
          }
          clickable={false}
          isFavourite={movie.isFavourite}
          handleFavouritesClick={() => handleFavouritesClick(movie)}

        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className='rating-directors'>
            <div>
              <h3>RATING</h3>
              <div className='score'>{movie.vote_average}</div>
            </div>
          </div>

        </Text>
      </Content>
    </Wrapper>
  )
};

export default MovieInfo;
