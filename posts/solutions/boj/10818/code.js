const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .split('\n')[1]
  .split(' ')
  .map(Number);

console.log(`${Math.min(...input)} ${Math.max(...input)}`);
