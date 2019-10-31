import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PokemonTypeTag from './PokemonTypeTag';
import TypesContext from '../contexts/TypesContext';

const PokemonTypes = ({ types }) => {
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
            <PokemonTypeTag type={type}/>
            <Typography variant="caption"> {effect}x</Typography>
          </Grid>
        )}
      </Grid>
      <Grid item container xs={12} sm={6} spacing={1} alignContent="flex-start">
        {notEffective.map(([type, effect]) =>
          <Grid item xs={12}>
            <PokemonTypeTag type={type}/>
            <Typography variant="caption"> {effect}x</Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default PokemonTypes;
