import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import PokedexContext from './contexts/PokedexContext';
import TypesContext from './contexts/TypesContext';
import data from '../kanto.json';
import types from '../types.json';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PokedexContext.Provider value={data}>
      <TypesContext.Provider value={types}>
        <App/>
      </TypesContext.Provider>
    </PokedexContext.Provider>,
    document.getElementById('root')
  );
});
