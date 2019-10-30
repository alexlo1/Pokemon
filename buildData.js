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
      console.log('data received, length:', result.length);
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
for (let i = 101; i <= 151; i++) {
  promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`));
}

function stripPokemonData(pokemon) {
  let data = pokemon.data;
  delete data.base_experience;
  delete data.forms;
  delete data.game_indices;
  delete data.held_items;
  delete data.is_default;
  delete data.location_area_encounters;
  delete data.moves;
  delete data.order;
  delete data.species;

  data.abilities.forEach((_, index) => {
    data.abilities[index] = data.abilities[index].ability.name;
  });

  data.sprite = data.sprites.front_default.slice(73);
  delete data.sprites;

  let newStats = {};
  data.stats.forEach((_, index) => {
    let statName = data.stats[index].stat.name;
    newStats[statName] = data.stats[index].base_stat;
  });
  data.stats = newStats;

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
