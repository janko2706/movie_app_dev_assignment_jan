import React from 'react';
import { Link } from 'react-router-dom';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import headerLogo from '../../images/headerLogo.png';
import Dropdown from 'react-bootstrap/Dropdown';

import SearchBar from '../SearchBar';
import { Movie } from '../../API';
//MOVIE RESULT DISPLAY
// import Thumb from '../Thumb';
// import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// import NoImage from '../../images/no_image.jpg';

type Props = {
  favourites: Movie[],
}


const Header: React.FC<Props> = ({ favourites }) => {
  const {
    // state,
    // isLoading,
    // isError,
    // searchTerm,
    setSearchTerm,
    // setIsLoadingMore
  } = useHomeFetch();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid">
        <Link to='/' className='navbar-brand'>
          <img src={headerLogo} alt='rmdb-logo' height={'70rem'}/>
        </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'/discovery'}>Discover</Link>
        </li>
        <li className="nav-item">
        <Dropdown className="nav-link" style={{background: 'transparent !important'}}>
          <Dropdown.Toggle id="dropdown-basic">
            Favorites
          </Dropdown.Toggle>

          <Dropdown.Menu  className="overflow-auto" style={{maxHeight: '100px'}}>
            {favourites && favourites.map((movie) => (
              <Dropdown.Item href="#/action-1" key={movie.id}>{movie.title}</Dropdown.Item>

            ))}

          </Dropdown.Menu>
    </Dropdown>
        </li>
      </ul>
          <SearchBar setSearchTerm={setSearchTerm} />
          {/* {searchTerm !== '' && state.results.map(movie => (
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
            />
          ))} */}
      </div>
    </nav>
  );
};

export default Header;
