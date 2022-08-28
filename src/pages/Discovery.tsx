import React, { useState, useEffect } from 'react';
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//components
import HeroImage from '../components/HeroImage';
import Thumb from '../components/Thumb';

//image
import NoImage from '../images/no_image.jpg';
import MovieRow from '../components/MovieRow';
//API type
import Spinner from '../components/Spinner';
import { Movie } from '../API';
import Grid from '../components/Grid';

type DiscoveryState = {
  trending: Movie[];
  comedies: Movie[];
  adventure: Movie[];
  horror: Movie[];
  animated: Movie[];
  family: Movie[];
  action: Movie[];
  drama: Movie[];
  new: Movie[];
}

type Props = {
  DiscoveryState: DiscoveryState,
  isLoadingDiscovery: boolean,
  isErrorDiscovery: boolean,
  handleFavouritesClick: (movie: Movie) => void,
}

const Discovery: React.FC<Props> = ({DiscoveryState, isLoadingDiscovery, isErrorDiscovery, handleFavouritesClick}) => {
  //for filter
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [filterType, setFilterType] = useState<string>('');
  

  useEffect(() => {
    const movies: Movie[] = [...DiscoveryState.action,...DiscoveryState.adventure, ...DiscoveryState.drama, ...DiscoveryState.horror, ...DiscoveryState.comedies, ...DiscoveryState.animated, ...DiscoveryState.family];
    const filterMovies: Movie[] = movies.filter((value, index, self) => index === self.findIndex((t) => (
      t.id === value.id
    )));
    setAllMovies(filterMovies);
  }, [DiscoveryState])

  if (isErrorDiscovery) return <div>Something went wrong ...</div>;


  function changeSort(sortName: string){
    setFilterType(sortName);
    switch (filterType) {
      case 'Name Ascending':
        const sortMovies: Movie[] = allMovies.sort((a, b) => a.original_title.localeCompare(b.original_title));
        setAllMovies(sortMovies);
        break;
    
      default:
        break;
    }
  }
  
  
  return (
    <>
      {DiscoveryState.comedies[0] ?
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${DiscoveryState.trending[0].backdrop_path}`}
          title={DiscoveryState.trending[0].original_title}
          text={DiscoveryState.trending[0].overview}
        />
      :
        <Spinner/>
      }
      <div className='d-flex justify-content-end m-3'>
        <button className='btn btn-primary' onClick={() => changeSort('Name Ascending')}>By title ascending</button>
        <button className='btn btn-primary' onClick={() => changeSort('')}>Remove filters</button>
      </div>
      {filterType && filterType !== '' ?
      allMovies && 
      <Grid header={filterType}>
        {allMovies.map((movie) => (
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
      :
      DiscoveryState.action && Object.entries(DiscoveryState).map((row, rowIdx) =>(
              <MovieRow header={row[0].toLocaleUpperCase()} key={rowIdx}>
              {isLoadingDiscovery ? <Spinner key={rowIdx}/> : row[1] && row[1].map((movie) => (
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
            </MovieRow>
      ))}
    </>
  );
};

export default Discovery;
