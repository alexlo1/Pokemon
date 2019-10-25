const fs = require('fs');
const axios = require('axios');

function addKeyValue(obj, [key, value]) {
  obj[key] = value;
}

function writeData(file, promises, processFunction, isObj = false) {
  let data = [];
  let obj = {};
  Promise.all(promises)
    .then(result => {
      console.log('data received');
      result.forEach(item => {
        isObj ? addKeyValue(obj, processFunction(item)) : data.push(processFunction(item));
      });

      fs.appendFile(file, JSON.stringify(isObj ? obj : data) + '\n', (err) => {
        if (err) throw err;
        console.log('success');
      });
    })
    .catch(err => {
      console.log(err);
    });
}

// fs.writeFile('test.json', '', (err) => {
//   if (err) throw err;
//   console.log('blank file');
// });

// For getting pokemon data

let promises = [];
for (let i =101; i <= 151; i++) {
  promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`));
}

function stripPokemonData(pokemon) {
  let data = pokemon.data;
  delete data.game_indices;
  delete data.held_items;
  delete data.location_area_encounters;
  delete data.moves; 

  data.abilities.forEach((_, index) => {
    data.abilities[index].ability = data.abilities[index].ability.name;
  });

  data.forms.forEach((_, index) => {
    data.forms[index] = data.forms[index].name;
  });

  data.species = data.species.name;

  data.sprite = data.sprites.front_default.slice(73);
  delete data.sprites;

  data.stats.forEach((_, index) => {
    data.stats[index].stat = data.stats[index].stat.name;
  });

  let type1 = data.types.find(t => t.slot === 1);
  let type2 = data.types.find(t => t.slot === 2);

  data.types = {
    type1: type1 && type1.type.name,
    type2: type2 && type2.type.name,
  };

  return data;
}

writeData('test.json', promises, stripPokemonData);

// For getting type data

// let promises = [];
// for (let i = 1; i <= 18; i++) {
//   promises.push(axios.get(`https://pokeapi.co/api/v2/type/${i}/`));
// }

// function stripTypeData(type) {
//   let data = type.data.damage_relations;
//   delete data.double_damage_to;
//   delete data.half_damage_to;
//   delete data.no_damage_to;

//   data.double_damage_from.forEach((_, index) => {
//     data.double_damage_from[index] = data.double_damage_from[index].name;
//   });
//   data.half_damage_from.forEach((_, index) => {
//     data.half_damage_from[index] = data.half_damage_from[index].name;
//   });
//   data.no_damage_from.forEach((_, index) => {
//     data.no_damage_from[index] = data.no_damage_from[index].name;
//   });
//   return [type.data.name, data];
// }

// writeData('test.json', promises, stripTypeData, true);
