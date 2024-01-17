function solution(quiz) {
  return quiz.map(q => {
    const [a, op, b, , c] = q.split(' ').map(v => (isNaN(v) ? v : Number(v)));
    if (op === '+') {
      return a + b === c ? 'O' : 'X';
    } else {
      return a - b === c ? 'O' : 'X';
    }
  });
}
