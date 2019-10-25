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
  },
});

const PokemonPreviewCard = ({ p, setCurrentPokemon }) => {
  const type1 = p.types.type1;
  const type2 = p.types.type2;

  let background = '#ddd';
  let lightBackground = '#fff';
  if (type1 && type2) {
    background = `linear-gradient(135deg, ${TypeColors[type1]._} 50%, ${TypeColors[type2]._} 50%)`;
    lightBackground = `linear-gradient(135deg, ${TypeColors[type1].light} 50%, ${TypeColors[type2].light} 50%)`;
  } else if (type1) {
    background = TypeColors[type1]._;
    lightBackground = TypeColors[type1].light;
  }
  const classes = useStyles({ background, lightBackground });

  return (
    <Card
      className={classes.card}
      raised
      onClick={() => setCurrentPokemon(p.id)}
    >
      <div className={classes.placeholder}/>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={Constants.spritesURL + p.sprite}
        />
      </div>
      <Typography className={classes.name}>
        {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
      </Typography>
    </Card>
  );
};

export default PokemonPreviewCard;
