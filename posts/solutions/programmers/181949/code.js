const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  const str = input[0];
  output = [...str].reduce((acc, cur) => {
    if (cur === cur.toUpperCase()) {
      acc += cur.toLowerCase();
    } else {
      acc += cur.toUpperCase();
    }
    return acc;
  }, '');

  console.log(output);
});
