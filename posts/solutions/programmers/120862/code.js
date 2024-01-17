function solution(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);

  return Math.max(sorted[0] * sorted[1], sorted.at(-1) * sorted.at(-2));
}
