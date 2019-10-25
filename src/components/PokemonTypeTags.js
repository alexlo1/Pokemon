import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import PokemonTypeTag from './PokemonTypeTag';

const useStyles = makeStyles({
  tags: {
    marginBottom: 4,
    justifyContent: 'center',
  },
});

const PokemonTypeTags = ({ types }) => {
  const classes = useStyles();
  return (
    <Grid container
      className={classes.tags}
      spacing={1}
    >
      <Grid item>
        <PokemonTypeTag type={types.type1}/>
      </Grid>
      {types.type2 && 
        <Grid item>
          <PokemonTypeTag type={types.type2}/>
        </Grid>
      }
    </Grid>
  );
};

export default PokemonTypeTags;
