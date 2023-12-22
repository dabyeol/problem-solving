const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [a, b] = input.map(Number);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
