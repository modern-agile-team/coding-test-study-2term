const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const [n] = input[0].split(' ').map((val) => Number(val));
const nArr = input.slice(1, 1 + n);
const mArr = input.slice(1 + n);

const numberToPokemon = {};
const pokemonToNumber = {};

for (let i = 0; i < nArr.length; i += 1) {
  numberToPokemon[i + 1] = nArr[i];
  pokemonToNumber[nArr[i]] = i + 1;
}

console.log(
  mArr
    .map((val) => {
      if (numberToPokemon[val]) {
        return numberToPokemon[val];
      }
      return pokemonToNumber[val];
    })
    .join('\n'),
);
