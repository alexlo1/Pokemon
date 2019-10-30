import React from 'react';
import Grid from '@material-ui/core/Grid';
import PokemonStatsBar from './PokemonStatsBar';

const PokemonStatsChart = ({ stats, type }) => {
  let statsObject = {
    attack: stats.attack,
    defense: stats.defense,
    spAttack: stats['special-attack'],
    spDefense: stats['special-defense'],
    speed: stats.speed,
    hp: stats.hp,
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
