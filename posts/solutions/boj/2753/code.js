const fs = require('fs');
const input = Number(fs.readFileSync(0));

console.log(
  Number(input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0))
);
