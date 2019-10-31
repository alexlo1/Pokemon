import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { PageProvider } from './contexts/PageContext';
import PokedexContext from './contexts/PokedexContext';
import { SearchProvider } from './contexts/SearchContext';
import TypesContext from './contexts/TypesContext';
import data from '../kanto.json';
import types from '../types.json';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PokedexContext.Provider value={data}>
      <TypesContext.Provider value={types}>
        <PageProvider>
          <SearchProvider>
            <App/>
          </SearchProvider>
        </PageProvider>
      </TypesContext.Provider>
    </PokedexContext.Provider>,
    document.getElementById('root')
  );
});

const config = {
  rootMargin: '0 0 400px 0',
  threshold: 0
};

document.addEventListener("DOMContentLoaded", () => {
  let lazyImageObserver = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        self.unobserve(entry.target);
      }
    });
  });

  let lazyImages = document.querySelectorAll('[data-src]');
  lazyImages.forEach(lazyImage => {
    lazyImageObserver.observe(lazyImage);
  });
}, config);
