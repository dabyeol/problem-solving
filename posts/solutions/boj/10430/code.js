const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().split(' ').map(Number);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
