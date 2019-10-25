import React, { useContext } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PokemonTypeTag from './PokemonTypeTag';
import TypeColors from '../constants/TypeColors';
import TypesContext from '../contexts/TypesContext';

const useStyles = makeStyles({
  bug: { background: TypeColors.bug._, },
  dark: { background: TypeColors.dark._, },
  dragon: { background: TypeColors.dragon._, },
  electric: { background: TypeColors.electric._, },
  fairy: { background: TypeColors.fairy._, },
  fighting: { background: TypeColors.fighting._, },
  fire: { background: TypeColors.fire._, },
  flying: { background: TypeColors.flying._, },
  ghost: { background: TypeColors.ghost._, },
  grass: { background: TypeColors.grass._, },
  ground: { background: TypeColors.ground._, },
  ice: { background: TypeColors.ice._, },
  normal: { background: TypeColors.normal._, },
  poison: { background: TypeColors.poison._, },
  psychic: { background: TypeColors.psychic._, },
  rock: { background: TypeColors.rock._, },
  steel: { background: TypeColors.steel._, },
  water: { background: TypeColors.water._, },
});

const PokemonTypes = ({ types }) => {
  const classes = useStyles();
  const typesData = useContext(TypesContext);

  const effectiveness = {};
  Object.keys(typesData).forEach(key => effectiveness[key] = 1);

  typesData[types.type1].double_damage_from.forEach(t => effectiveness[t] *= 2);
  typesData[types.type1].half_damage_from.forEach(t => effectiveness[t] *= 0.5);
  typesData[types.type1].no_damage_from.forEach(t => effectiveness[t] = 0);

  if (types.type2) {
    typesData[types.type2].double_damage_from.forEach(t => effectiveness[t] *= 2);
    typesData[types.type2].half_damage_from.forEach(t => effectiveness[t] *= 0.5);
    typesData[types.type2].no_damage_from.forEach(t => effectiveness[t] = 0);
  }

  const superEffective = [];
  Object.entries(effectiveness)
    .filter(([key, value]) => value > 1)
    .forEach(p => superEffective.push(p));

  const notEffective = [];
  Object.entries(effectiveness)
    .filter(([key, value]) => value < 1)
    .forEach(p => notEffective.push(p));

  superEffective.sort();
  notEffective.sort();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography>Damage from</Typography>
      </Grid>
      <Grid item container xs={12} sm={6} spacing={1} alignContent="flex-start">
        {superEffective.map(([type, effect]) =>
          <Grid item xs={12}>
            <Typography variant="caption">
              <PokemonTypeTag type={type}/> {effect}x
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid item container xs={12} sm={6} spacing={1} alignContent="flex-start">
        {notEffective.map(([type, effect]) =>
          <Grid item xs={12}>
            <Typography variant="caption">
              <PokemonTypeTag type={type}/> {effect}x
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default PokemonTypes;
