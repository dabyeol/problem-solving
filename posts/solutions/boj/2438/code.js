const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = 1; i <= n; i++) {
  console.log('*'.repeat(i));
}
