function solution(score) {
  const sum = score.map(([e, m]) => e + m);
  const sorted = [...sum].sort((a, b) => b - a);

  return sum.map(s => sorted.indexOf(s) + 1);
}
