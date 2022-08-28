import React, { useState, useEffect, useRef } from 'react';

//Types
type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [ state, setState ] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    };

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <div className='d-flex'>
          <input
            type='search'
            placeholder='Search for a movie'
            className='form-control me-2'
            onChange={event => setState(event.currentTarget.value)}
            value={state}
          />
          <i className="bi bi-search my-2 my-sm-0" style={{fontSize: 30, color: 'white'}}></i>
    </div>
  );
};

export default SearchBar;
