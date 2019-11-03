import React from 'react';
import Grid from '@material-ui/core/Grid';
import PokemonStatsBar from './PokemonStatsBar';

const PokemonStatsChart = ({ stats, type }) => {
  let statsObject = {
    'Attack': stats.attack,
    'Defense': stats.defense,
    'Sp Atk': stats['special-attack'],
    'Sp Def': stats['special-defense'],
    'Speed': stats.speed,
    'HP': stats.hp,
  };

  return (
    <Grid container>
      {Object.entries(statsObject).map(([stat, value]) => (
        <PokemonStatsBar
          key={stat}
          statName={stat}
          statValue={value}
          type={type}
        />
      ))}
    </Grid>
  );
};

export default PokemonStatsChart;
