function solution(numbers) {
  const number = numbers
    .map(String)
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join('');

  return number[0] === '0' ? '0' : number;
}
