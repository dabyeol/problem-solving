function solution(rank, attendance) {
  const [[a], [b], [c]] = rank
    .map((r, i) => [i, r])
    .filter((_, i) => attendance[i])
    .sort((a, b) => a[1] - b[1]);

  return 10000 * a + 100 * b + c;
}
