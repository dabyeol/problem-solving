const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [one, two] = input.map(Number);

console.log(one * (two % 10));
console.log(one * (Math.floor(two / 10) % 10));
console.log(one * (Math.floor(two / 100) % 10));
console.log(one * two);
