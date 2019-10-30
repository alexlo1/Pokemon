import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Constants from '../constants/Constants';
import TypeColors from '../constants/TypeColors';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    cursor: 'pointer',
  },
  placeholder: {
    marginTop: '100%',
  },
  name: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: props => props.background,
    '&:hover': {
      background: props => props.lightBackground,
    },
  },
  image: {
    display: 'block',
    width: 96,
    height: 96,
    margin: 'auto',
    background: props => props.lightBackground,
  },
});

const PokemonPreviewCard = ({ p, setCurrentPokemon }) => {
  const type1 = p.types.type1;
  const type2 = p.types.type2 || p.types.type1;

  const background = `linear-gradient(135deg, ${TypeColors[type1]._} 50%, ${TypeColors[type2 || type1]._} 50%)`;
  const lightBackground = `linear-gradient(135deg, ${TypeColors[type1].light} 50%, ${TypeColors[type2 || type1].light} 50%)`;
  
  const classes = useStyles({ background, lightBackground });

  return (
    <Card
      className={classes.card}
      raised
      onClick={() => setCurrentPokemon(id => id === p.id ? 0 : p.id)}
    >
      <div className={classes.placeholder}/>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          data-src={Constants.spritesURL + p.sprite}
          alt={p.name}
        />
      </div>
      <Typography className={classes.name}>
        {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
      </Typography>
    </Card>
  );
};

export default PokemonPreviewCard;
