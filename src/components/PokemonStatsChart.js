import React from 'react';
import Grid from '@material-ui/core/Grid';
import PokemonStatsBar from './PokemonStatsBar';

const PokemonStatsChart = ({ stats, type }) => {
  let statsObject = {
    attack: stats.find(s => s.stat === 'attack').base_stat,
    defense: stats.find(s => s.stat === 'defense').base_stat,
    spAttack: stats.find(s => s.stat === 'special-attack').base_stat,
    spDefense: stats.find(s => s.stat === 'special-defense').base_stat,
    speed: stats.find(s => s.stat === 'speed').base_stat,
    hp: stats.find(s => s.stat === 'hp').base_stat,
  };

  return (
    <Grid container>
      <PokemonStatsBar
        statName="HP"
        statValue={statsObject.hp}
        type={type}
      />
      <PokemonStatsBar
        statName="Attack"
        statValue={statsObject.attack}
        type={type}
      />
      <PokemonStatsBar
        statName="Defense"
        statValue={statsObject.defense}
        type={type}
      />
      <PokemonStatsBar
        statName="Sp Atk"
        statValue={statsObject.spAttack}
        type={type}
      />
      <PokemonStatsBar
        statName="Sp Def"
        statValue={statsObject.spDefense}
        type={type}
      />
      <PokemonStatsBar
        statName="Speed"
        statValue={statsObject.speed}
        type={type}
      />
    </Grid>
  );
};

export default PokemonStatsChart;
