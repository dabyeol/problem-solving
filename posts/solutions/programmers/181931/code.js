function solution(a, d, included) {
  return included.reduce((acc, cur, idx) => (cur ? acc + a + idx * d : acc), 0);
}
