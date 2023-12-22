const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  output = '';

  [...str].forEach(char => {
    if (char === char.toUpperCase()) {
      output += char.toLowerCase();
    } else {
      output += char.toUpperCase();
    }
  });

  console.log(output);
});
