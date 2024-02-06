const fs = require('fs');
const [, input, v] = fs.readFileSync(0).toString().trim().split('\n');

console.log(input.split(' ').filter(n => n === v).length);
