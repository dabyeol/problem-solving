const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [a, b] = input.map(Number);

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}
