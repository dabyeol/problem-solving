const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().split(' ').map(Number).sort();

if (a === b && b === c && c === a) {
  console.log(10000 + a * 1000);
} else if (a === b) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(c * 100);
}
