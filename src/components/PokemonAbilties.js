import React from 'react';
import Typography from '@material-ui/core/Typography';

const PokemonAbilities = ({ abilities }) => {
  const abilitiesList = abilities.map(a => {
    const words = a.ability.split('-');
    return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  });

  return (
    <Typography>Abilities: {abilitiesList.join(', ')}</Typography>
  );
};

export default PokemonAbilities;
