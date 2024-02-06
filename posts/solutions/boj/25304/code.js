const fs = require('fs');
const [x, , ...input] = fs.readFileSync(0).toString().trim().split('\n');

const sum = input.reduce((acc, cur) => {
  const [a, b] = cur.split(' ').map(Number);

  return acc + a * b;
}, 0);

console.log(Number(x) === sum ? 'Yes' : 'No');
