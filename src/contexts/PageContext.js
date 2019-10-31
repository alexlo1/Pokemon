import React, { createContext, useState } from 'react';

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const setPageString = pageString => {
    setPage({ pageString, setPageString });
  };

  const pageState = {
    pageString: 'pokedex',
    setPageString,
  };

  const [page, setPage] = useState(pageState);

  return (
    <PageContext.Provider value={page}>
      {children}
    </PageContext.Provider>
  );
};
