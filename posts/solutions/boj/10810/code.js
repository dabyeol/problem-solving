const fs = require('fs');
const [h, ...input] = fs.readFileSync(0).toString().trim().split('\n');
const [n] = h.split(' ').map(Number);

const baskets = new Array(n).fill(0);
input.forEach(s => {
  const [i, j, k] = s.split(' ').map(Number);
  for (let a = i; a <= j; a++) {
    baskets[a - 1] = k;
  }
});

console.log(baskets.join(' '));
