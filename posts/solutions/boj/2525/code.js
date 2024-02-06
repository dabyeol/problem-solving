const fs = require('fs');
const [a, b, c] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(/ |\n/)
  .map(Number);

const time = (a * 60 + b + c) % (24 * 60);
console.log(`${Math.floor(time / 60)} ${time % 60}`);
