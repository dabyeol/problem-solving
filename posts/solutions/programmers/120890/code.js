function solution(array, n) {
  return [...array].sort(
    (a, b) => Math.abs(a - n) - Math.abs(b - n) || a - b
  )[0];
}
