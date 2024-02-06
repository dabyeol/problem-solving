const fs = require('fs');
const [[n], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(s => s.split(' ').map(Number));

const baskets = [...Array(n)].map((_, i) => i + 1);
input.forEach(([i, j]) => {
  [baskets[i - 1], baskets[j - 1]] = [baskets[j - 1], baskets[i - 1]];
});

console.log(baskets.join(' '));
