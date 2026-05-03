const fs = require('fs');
const computePolkadotScore = require('../src/computePolkadotScore');

const ascii = fs.readFileSync('./input/angelica.txt', 'utf-8');

const result = computePolkadotScore(ascii);

console.log("Polkadot Score:", result);