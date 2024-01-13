function solution(a, b, c) {
  if (a !== b && a !== c && b !== c) {
    return a + b + c;
  }

  if (a === b && a === c) {
    return (a + b + c) * (a * a + b * b + c * c) * (a ** 3 + b ** 3 + c ** 3);
  }

  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
}
