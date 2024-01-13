function solution(ineq, eq, n, m) {
  if (eq === '=' && n === m) return 1;
  return Number(ineq === '<' ? n < m : n > m);
}
