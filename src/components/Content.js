import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PokemonDetails from './PokemonDetails';
import PokemonGrid from './PokemonGrid';

const useStyles = makeStyles({
  container: {
    marginTop: 80,
    height: 'calc(100vh - 80px)',
    overflow: 'hidden',
  },
});

const Content = () => {
  const classes = useStyles();
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
        <Grid item xs={currentPokemon ? 6 : 12}>
          <PokemonGrid
            currentPokemon={currentPokemon}
            setCurrentPokemon={setCurrentPokemon}
          />
        </Grid>
        {currentPokemon !== 0 && 
          <Grid item xs={6}>
            <PokemonDetails
              currentPokemon={currentPokemon}
              handleClose={handleClose}
            />
          </Grid>
        }
      </Grid>
    </Container>
  );
};

export default Content;
