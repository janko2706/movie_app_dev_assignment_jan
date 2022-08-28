import React, { useState } from 'react';
// Routing
//@ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Movie from './pages/Movie';
import { Movie as MovieType } from './API';
import NotFound from './components/NotFound';
import Discovery from './pages/Discovery';
import Home from './pages/Home';

// Styles
import { GlobalStyle } from './GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHomeFetch } from './hooks/useHomeFetch';
import { useDiscoveryFetch } from './hooks/useDiscoveryFetch';

const App: React.FC = () => {
    const {
        state,
        isLoading,
        isError,
        setIsLoadingMore
    } = useHomeFetch();

    const {
      DiscoveryState,
      isLoadingDiscovery,
      isErrorDiscovery,
    } = useDiscoveryFetch();

    const [favourites, setFavourites] = useState<MovieType[]>([]);

    const addFavouriteMovie = (movie: MovieType) => {
      if (!favourites.includes(movie)) {
        const newFavourites = [...favourites, movie];
        movie.isFavourite = true;
        setFavourites(newFavourites);
        state.results.forEach(item => {
          if(item.id === movie.id){
            item.isFavourite = true;
          }
        })
        Object.entries(DiscoveryState).forEach(row => {
          row[1].forEach(item => {
            if(item.id === movie.id){
              item.isFavourite = true;
            }
          })
        })
      }else{
        const newFavouriteList = favourites.filter(
          (fav) => fav.id !== movie.id
        );
        movie.isFavourite = false;
        state.results.forEach(item => {
          if(item.id === movie.id){
            item.isFavourite = false;
          }
        })
        Object.entries(DiscoveryState).forEach(row => {
          row[1].forEach(item => {
            if(item.id === movie.id){
              item.isFavourite = false;
            }
          })
        })
        setFavourites(newFavouriteList);
      }

      
    }


  return (
    <Router>
      <Header favourites={favourites}/>
      <Routes>
        <Route path='/' element={<Home state={state} isLoading={isLoading} isError={isError} setIsLoadingMore={setIsLoadingMore} handleFavouritesClick={addFavouriteMovie}/>}/>
        <Route path='/discovery' element={<Discovery DiscoveryState={DiscoveryState} isLoadingDiscovery={isLoadingDiscovery} isErrorDiscovery={isErrorDiscovery} handleFavouritesClick={addFavouriteMovie}/>}/>
        <Route path='/:movieId' element={<Movie favouriteMovies={favourites !== undefined ? favourites : []} handleFavouritesClick={addFavouriteMovie}/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle />
    </Router>
    )
};

export default App;
