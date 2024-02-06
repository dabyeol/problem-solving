const fs = require('fs');
const [h, m] = fs.readFileSync(0).toString().split(' ').map(Number);
const time = (24 * 60 + h * 60 + m - 45) % (24 * 60);

console.log(`${Math.floor(time / 60)} ${time % 60}`);
