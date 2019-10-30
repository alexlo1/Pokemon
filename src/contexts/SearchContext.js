import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const setSearchString = searchString => {
    setSearch({ searchString, setSearchString });
  };

  const searchState = {
    searchString: '',
    setSearchString,
  };

  const [search, setSearch] = useState(searchState);

  return (
    <SearchContext.Provider value={search}>
      {children}
    </SearchContext.Provider>
  );
};
