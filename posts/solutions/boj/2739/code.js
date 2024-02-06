const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
