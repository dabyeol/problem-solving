const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [a, b, c] = input.map(Number);

console.log(a + b + c);
