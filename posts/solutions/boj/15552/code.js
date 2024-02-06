const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').slice(1);

let output = '';
input.forEach(s => {
  const [a, b] = s.split(' ').map(Number);
  output += `${a + b}\n`;
});

console.log(output);
