const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').slice(1);

input.forEach((s, i) => {
  const [a, b] = s.split(' ').map(Number);

  console.log(`Case #${i + 1}: ${a} + ${b} = ${a + b}`);
});
