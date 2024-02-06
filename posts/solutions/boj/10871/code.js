const fs = require('fs');
const [, x, ...a] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(/ |\n/)
  .map(Number);

console.log(a.filter(n => n < x).join(' '));
