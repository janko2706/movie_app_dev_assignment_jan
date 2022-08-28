import React from 'react';
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
  // const [allMovies, setAllMovies] = useState<Movie[]>();
  

  // useEffect(() => {
  //   const movies: Movie[] = [...DiscoveryState.action,...DiscoveryState.adventure, ...DiscoveryState.drama, ...DiscoveryState.horror, ...DiscoveryState.comedies, ...DiscoveryState.animated, ...DiscoveryState.family];
  //   setAllMovies(movies);
  // }, [DiscoveryState])

  if (isErrorDiscovery) return <div>Something went wrong ...</div>;


  
  
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
        <button className='btn btn-primary'>Filter Movies</button>
      </div>
      {DiscoveryState.action && Object.entries(DiscoveryState).map((row, rowIdx) =>(
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
