function solution(n, k) {
  return [...Array(Math.floor(n / k))].map((_, i) => k * (i + 1));
}
