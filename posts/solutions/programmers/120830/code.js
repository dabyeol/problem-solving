function solution(n, k) {
  k -= Math.floor(n / 10);

  return n * 12000 + k * 2000;
}
