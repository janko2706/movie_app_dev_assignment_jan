import React from 'react';
import { Link } from 'react-router-dom';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import headerLogo from '../../images/headerLogo.png';
import Dropdown from 'react-bootstrap/Dropdown';
//style
import styled from 'styled-components';


import SearchBar from '../SearchBar';
import { Movie } from '../../API';
//MOVIE RESULT DISPLAY


type Props = {
  favourites: Movie[],
}

const SearchModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 18em;
  max-height: 10em;
  word-break: break-all;
  overflow-y: auto;
  overflow-x: hidden;
  right: 5em;
  top: 75%;
  padding: 1em;
  border-radius: 10px;
  z-index: 999;
  background-color: transparent;
  @media (max-width: 490px){
    top: 100%;
    right: 0;
    width: 100vw;
    max-width: 100vw;
  }
  .movieSearchLink{
    padding: .4em;
    width: 100%;
    margin-bottom: .2em;
    background-color: var(--darkGrey);
    color: white;
    border-radius: 10px;
    transition:all .3s ease-in-out;
  }
  .movieSearchLink:hover{
    color: black;
    background-color: white;
  }

`

const Header: React.FC<Props> = ({ favourites }) => {
  const {
    state,
    searchTerm,
    setSearchTerm,
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
              <Dropdown.Item  key={movie.id}>
                <Link to={`/${movie.id}`} style={{textDecoration: 'none'}}>{movie.title}</Link>  
              </Dropdown.Item>

            ))}

          </Dropdown.Menu>
    </Dropdown>
        </li>
      </ul>
          <SearchBar setSearchTerm={setSearchTerm} />
          <SearchModal>
          {searchTerm !== "" && state.results.map(movie => (
              <Link to={`/${movie.id}`} style={{textDecoration: 'none'}}  className="movieSearchLink">{movie.title}</Link>
              ))}
          </SearchModal>
      </div>
    </nav>
  );
};

export default Header;
