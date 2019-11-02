import React, { useContext } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import PokemonTypeTag from './PokemonTypeTag';
import TypesContext from '../contexts/TypesContext';

const useStyles = makeStyles({
  attackCell: {
    width: 80,
    borderBottom: 'none',
    textAlign: 'left',
  },
  autoWidth: {
    margin: 'auto',
    width: 'auto',
  },
  cell: {
    borderBottom: 'none',
    textAlign: 'center',
  },
  immune: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#212121',
  },
  notVeryEffective: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#d32f2f',
  },
  superEffective: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#388e3c',
  },
});

const superEffective = (typesData, attack, defense) => {
  return typesData[defense].double_damage_from.includes(attack);
};

const notVeryEffective = (typesData, attack, defense) => {
  return typesData[defense].half_damage_from.includes(attack);
};

const immune = (typesData, attack, defense) => {
  return typesData[defense].no_damage_from.includes(attack);
};

const effectivenessBox = (typesData, attackType, defenseType) => {
  const classes = useStyles();

  if (superEffective(typesData, attackType, defenseType)) {
    return (
      <Typography className={classes.superEffective}>
        2
      </Typography>
    );
  }

  if (notVeryEffective(typesData, attackType, defenseType)) {
    return (
      <Typography className={classes.notVeryEffective}>
        0.5
      </Typography>
    );
  }

  if (immune(typesData, attackType, defenseType)) {
    return (
      <Typography className={classes.immune}>
        0
      </Typography>
    );
  }

  return null;
};

const PokemonTypeChart = () => {
  const classes = useStyles();
  const typesData = useContext(TypesContext);
  const typeNames = Object.keys(typesData).sort();

  return (
    <Table className={classes.autoWidth} size="small">
      <TableHead>
        <TableRow>
          <TableCell className={classes.cell}/>
          {typeNames.map(type => (
            <TableCell className={classes.cell} padding="none">
              <PokemonTypeTag type={type} abbreviated/>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {typeNames.map(attackType => (
          <TableRow hover>
            <TableCell className={classes.attackCell} padding="none">
              <PokemonTypeTag type={attackType}/>
            </TableCell>
            {typeNames.map(defenseType => (
              <TableCell className={classes.cell} padding="none">
                {effectivenessBox(typesData, attackType, defenseType)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PokemonTypeChart;
