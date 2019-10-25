import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import TypeColors from '../constants/TypeColors';

const useStyles = makeStyles({
  banner: {
    marginTop: 0,
    marginBottom: 8,
    textAlign: 'center',
    background: props => props.type ? TypeColors[props.type]._ : '#fff',
  },
});

const PokemonDetailsBanner = ({ name, type, onClose }) => {
  const classes = useStyles({ type });
  return (
    <Grid container spacing={1} className={classes.banner} alignItems="center">
      <Grid item xs={12} sm="auto">
        <IconButton onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      </Grid>
      <Grid item xs={12} sm="auto">
        <Typography variant="h6" display="inline">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PokemonDetailsBanner;
