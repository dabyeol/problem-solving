function solution(binomial) {
  const [a, op, b] = binomial.split(' ').map(v => (isNaN(v) ? v : Number(v)));

  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
}
