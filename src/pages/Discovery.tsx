import React, { useState } from 'react';
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
  const movies: Movie[] = [...DiscoveryState.action,...DiscoveryState.adventure, ...DiscoveryState.drama, ...DiscoveryState.horror, ...DiscoveryState.comedies, ...DiscoveryState.animated, ...DiscoveryState.family];
  const filterMovies: Movie[] = movies.filter((value, index, self) => index === self.findIndex((t) => (
    t.id === value.id
  )));
  setAllMovies(filterMovies);

  if (isErrorDiscovery) return <div>Something went wrong ...</div>;


  function changeSort(sortName: string){
    setFilterType(sortName);
    switch (sortName) {
      case 'Title Ascending':
        const sortMovies: Movie[] = filterMovies.sort((a, b) => a.original_title.localeCompare(b.original_title));
        setAllMovies(sortMovies);
        break;
      case 'Highest voted':
        const sortMovies2: Movie[] = filterMovies.sort((a, b) => b.vote_average-a.vote_average);
        setAllMovies(sortMovies2);
        break;
      case 'Popular this year':
        const filterYear = filterMovies.filter(a => {
          let relese_date: Date = new Date(a.release_date);
          let now_date: Date = new Date();

          if(relese_date.getFullYear() === now_date.getFullYear()){
            return true;
          }else{
            return false;
          }
        })
        const sortMovies3: Movie[] = filterYear.sort((a, b) => b.popularity-a.popularity);
        setAllMovies(sortMovies3);
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
      <div className='fluid-container'>
        <i className="bi bi-funnel" style={{fontSize: '2em', color: 'white'}}></i>
        <button className='btn btn-primary m-2' onClick={() => changeSort('Title Ascending')}>By title ascending</button>
        <button className='btn btn-primary m-2' onClick={() => changeSort('Highest voted')}>Highest voted</button>
        <button className='btn btn-primary m-2' onClick={() => changeSort('Popular this year')}>Popular this year</button>
        <button className='btn btn-danger m-2' onClick={() => changeSort('')}>Remove filters</button>
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
