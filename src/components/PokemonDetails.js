import React, { useContext } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PokemonAbilities from './PokemonAbilties';
import PokemonDetailsBanner from './PokemonDetailsBanner';
import PokemonStatsChart from './PokemonStatsChart';
import PokemonTypes from './PokemonTypes';
import PokemonTypeTags from './PokemonTypeTags';
import Constants from '../constants/Constants';
import PokedexContext from '../contexts/PokedexContext';

const useStyles = makeStyles({
  details: {
    maxHeight: 'calc(100vh - 64px)',
    overflow: 'auto',
  },
  image: {
    textAlign: 'center',
  },
  noWidth: {
    width: 0,
    whiteSpace: 'nowrap',
  },
});

const PokemonDetails = ({ currentPokemon, handleClose }) => {
  const classes = useStyles();
  const data = useContext(PokedexContext);
  const p = currentPokemon && data[currentPokemon - 1];

  return p ? (
    <>
      <Grid container spacing={1} className={classes.details}>
        <Grid item xs={12}>
          <PokemonDetailsBanner
            name={p.name}
            id={p.id}
            type={p.types.type1}
            onClose={handleClose}
          />
        </Grid>
        <Grid item xs={12} sm="auto" className={classes.image}>
          <img src={Constants.spritesURL + p.sprite}/>
        </Grid>
        <Grid item xs={12} sm="auto">
          <PokemonTypeTags types={p.types}/>
          <Typography className={classes.noWidth}>
            {`Height: ${p.height / 10.0} m`}
          </Typography>
          <Typography className={classes.noWidth}>
            {`Weight: ${p.weight / 10.0} kg`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PokemonStatsChart stats={p.stats} type={p.types.type1}/>
        </Grid>
        <Grid item xs={12}>
          <PokemonTypes types={p.types}/>
        </Grid>
        <Grid item xs={12}>
          <PokemonAbilities abilities={p.abilities}/>
        </Grid>
      </Grid>
    </>
  ) : null;
};

export default PokemonDetails;
