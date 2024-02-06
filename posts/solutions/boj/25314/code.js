const fs = require('fs');
const n = Number(fs.readFileSync(0));

console.log(`${'long '.repeat(Math.floor(n / 4))}int`);
