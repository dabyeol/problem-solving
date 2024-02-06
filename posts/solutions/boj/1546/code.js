const fs = require('fs');
const [n, ...input] = fs.readFileSync(0).toString().split(/ |\n/).map(Number);

const max = Math.max(...input);
const sum = input.reduce((acc, cur) => acc + cur);

console.log(((sum / max) * 100) / n);
