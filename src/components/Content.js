import React, { useState, useContext } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PokemonDetails from './PokemonDetails';
import PokemonGrid from './PokemonGrid';
import PokemonTypeChart from './PokemonTypeChart';
import { PageContext } from '../contexts/PageContext';

const useStyles = makeStyles({
  container: {
    marginTop: 80,
    height: 'calc(100vh - 80px)',
    overflow: 'hidden',
  },
  hide: {
    display: 'none',
  },
});

const Content = () => {
  const classes = useStyles();
  const { pageString } = useContext(PageContext);
  const [currentPokemon, setCurrentPokemon] = useState(0);

  const handleClose = () => {
    setCurrentPokemon(0);
  };

  return (
    <Container
      className={classes.container}
      maxWidth="lg"
    >
      <Grid container spacing={4}>
        <Grid item xs={currentPokemon ? 6 : 12}
          className={pageString !== 'pokedex' && classes.hide}
        >
          <PokemonGrid
            currentPokemon={currentPokemon}
            setCurrentPokemon={setCurrentPokemon}
          />
        </Grid>
        {pageString === 'pokedex' && currentPokemon !== 0 && 
          <Grid item xs={6}>
            <PokemonDetails
              currentPokemon={currentPokemon}
              handleClose={handleClose}
            />
          </Grid>
        }
        {pageString === 'types' &&
          <Grid item xs={12}>
            <PokemonTypeChart/>
          </Grid>
        }
      </Grid>
    </Container>
  );
};

export default Content;
