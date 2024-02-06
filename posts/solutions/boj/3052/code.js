const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const set = new Set();
input.forEach(n => set.add(n % 42));

console.log(set.size);
