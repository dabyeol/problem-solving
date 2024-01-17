function solution(num, total) {
  const start = total / num - (num - 1) / 2;

  return [...Array(num)].map((_, i) => i + start);
}
