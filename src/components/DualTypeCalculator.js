import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import PokemonTypes from './PokemonTypes';
import TypesContext from '../contexts/TypesContext';

const DualTypeCalculator = () => {
  const typesData = useContext(TypesContext);
  const typeNames = Object.keys(typesData).sort();
  const [type1, setType1] = useState(typeNames[0]);
  const [type2, setType2] = useState(typeNames[1]);

  const handleChangeType1 = e => {
    setType1(e.target.value);
  };

  const handleChangeType2 = e => {
    setType2(e.target.value);
  };

  const selectionOptions = () => (
    <>
      {typeNames.map(type => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </>
  );

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography component="span">Type 1: </Typography>
        <NativeSelect
          value={type1}
          onChange={handleChangeType1}
        >
          {selectionOptions()}
        </NativeSelect>
      </Grid>
      <Grid item xs={12}>
        <Typography component="span">Type 2: </Typography>
        <NativeSelect
          value={type2}
          onChange={handleChangeType2}
        >
          {selectionOptions()}
        </NativeSelect>
      </Grid>
      <Grid item xs={12}>
        <PokemonTypes types={{ type1, type2 }}/>
      </Grid>
    </Grid>
  );
};

export default DualTypeCalculator;
