import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TypeColors from '../constants/TypeColors';

const getTypeColor = props => props.type ? TypeColors[props.type]._ : '#fff';

const useStyles = makeStyles({
  stat: {
    width: 120,
  },
  statBar: {
    width: props => Math.min(150, props.statValue),
    height: 20,
    background: getTypeColor,
  },
});

const PokemonStatsBar = ({ statName, statValue, type }) => {
  const classes = useStyles({ statValue, type });
  
  return (
    <Grid item container xs={12}>
      <Grid item xs={12} sm="auto">
        <Typography className={classes.stat}>{statName}: {statValue}</Typography>
      </Grid>
      <Grid item xs={0} sm="auto">
        <div className={classes.statBar}/>
      </Grid>
    </Grid>
  );
};

export default PokemonStatsBar;
