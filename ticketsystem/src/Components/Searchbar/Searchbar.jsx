import './Searchbar.scss';
import { useState } from 'react';

const Searchbar = props => {
  
    const { handleInput, searchTerm } = props;
  

  return <input type="text" value={searchTerm} onInput={handleInput} className="search-bar"></input>;
};

export default Searchbar;
