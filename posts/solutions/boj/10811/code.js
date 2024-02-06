const fs = require('fs');
const [[n], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(s => s.split(' ').map(Number));

const baskets = [...Array(n)].map((_, i) => i + 1);
input.forEach(([i, j]) => {
  baskets.splice(i - 1, j - i + 1, ...baskets.slice(i - 1, j).reverse());
});

console.log(baskets.join(' '));
