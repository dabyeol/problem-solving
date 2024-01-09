function solution(n) {
  return [...Array(n)].map((_, i) =>
    [...Array(n)].map((_, j) => Number(i === j))
  );
}
