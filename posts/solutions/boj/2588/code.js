const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split('\n').map(Number);

console.log(a * (b % 10));
console.log(a * (Math.floor(b / 10) % 10));
console.log(a * (Math.floor(b / 100) % 10));
console.log(a * b);
