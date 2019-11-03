import React, { useContext } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PokemonPreviewCard from './PokemonPreviewCard';
import PokedexContext from '../contexts/PokedexContext';
import { SearchContext } from '../contexts/SearchContext';

const useStyles = makeStyles({
  grid: {
    maxHeight: 'calc(100vh - 80px)',
    overflow: 'auto',
  },
  hide: {
    display: 'none',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  question: {
    width: '20%',
    maxWidth: 180,
    height: 'auto',
  },
});

const PokemonGrid = ({ currentPokemon, setCurrentPokemon }) => {
  const classes = useStyles();
  const data = useContext(PokedexContext);
  const { searchString } = useContext(SearchContext);

  const matchesSearchString = (p, searchString) => {
    const search = searchString.toLowerCase();
    if (p.id === parseInt(search)) return true;
    if (p.types.type1.includes(search)) return true;
    if (p.types.type2 && p.types.type2.includes(search)) return true;
    return p.name.includes(search);
  };

  const foundMatch = data.some(p => matchesSearchString(p, searchString));

  return (
    <Grid container spacing={2} className={classes.grid}>
      {data.map(p => (
        <Grid item
          className={!matchesSearchString(p, searchString) && classes.hide}
          xs={currentPokemon ? 12 : 6}
          sm={currentPokemon ? 6 : 3}
          md={currentPokemon ? 4 : 2}
        >
          <PokemonPreviewCard
            p={p}
            setCurrentPokemon={setCurrentPokemon}
          />
        </Grid>
      ))}
      {!foundMatch &&
        <>
          <Grid item xs={12} className={classes.center}>
            <img
              className={classes.question}
              src="./images/unown.png"
              alt="question mark"
            />
          </Grid>
          <Grid item xs={12} className={classes.center}>
            <Typography>Sorry, no search results found.</Typography>
          </Grid>
        </>
      }
    </Grid>
  );
};

export default PokemonGrid;
