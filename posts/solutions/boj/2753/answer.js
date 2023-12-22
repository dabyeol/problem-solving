const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin'));

console.log(
  input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0) ? 1 : 0
);
