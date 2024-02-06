const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').slice(0, -1);

input.forEach(s => {
  const [a, b] = s.split(' ').map(Number);

  console.log(a + b);
});
