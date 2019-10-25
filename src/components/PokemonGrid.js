import React, { useContext } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import PokemonPreviewCard from './PokemonPreviewCard';
import PokedexContext from '../contexts/PokedexContext';

const useStyles = makeStyles({
  grid: {
    maxHeight: 'calc(100vh - 64px)',
    overflow: 'auto',
  },
});

const PokemonGrid = ({ halfSize, setCurrentPokemon }) => {
  const classes = useStyles();
  const data = useContext(PokedexContext);

  return (
    <Grid container spacing={2} className={classes.grid}>
      {data.map(p => (
        <Grid item 
          xs={halfSize ? 12 : 6}
          sm={halfSize ? 6 : 3}
          md={halfSize ? 4 : 2}
        >
          <PokemonPreviewCard
            key={p.name}
            p={p}
            setCurrentPokemon={setCurrentPokemon}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonGrid;
