const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.forEach(s => {
  const [a, b] = s.split(' ').map(Number);

  console.log(a + b);
});
