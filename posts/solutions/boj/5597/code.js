const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const students = [];
for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    students.push(i);
  }
}

console.log(students.join('\n'));
