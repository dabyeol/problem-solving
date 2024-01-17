function solution(numbers) {
  const [a, b] = [...numbers].sort((a, b) => b - a);

  return a * b;
}
