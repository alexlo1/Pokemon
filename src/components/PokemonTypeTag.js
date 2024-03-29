import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import TypeColors from '../constants/TypeColors';

const useStyles = makeStyles({
  tag: {
    padding: '4px 8px',
    color: '#fff',
    background: props => props.type ? TypeColors[props.type]._ : '#fff',
  },
});

const PokemonTypeTag = ({ type, abbreviated }) => {
  const classes = useStyles({ type });

  return (
    <Typography
      className={classes.tag}
      variant="caption"
    >
      {abbreviated ? type.toUpperCase().slice(0,3) : type.toUpperCase()}
    </Typography>
  );
};

export default PokemonTypeTag;
