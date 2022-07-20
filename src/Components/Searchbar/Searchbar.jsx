import './_Searchbar.scss';
import { useState } from 'react';

const Searchbar = (props) => {
  const { handleInput, searchTerm } = props;

  return (
    <div className="search-bar-box">
      <p className="search-bar__title">Search employee:</p>
      <input type="text" value={searchTerm} onInput={handleInput} className="search-bar" />
    </div>
  );
};

export default Searchbar;
