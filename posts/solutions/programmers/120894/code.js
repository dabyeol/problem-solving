function solution(numbers) {
  const strings = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  return Number(
    strings.reduce((acc, cur, idx) => acc.replaceAll(cur, idx), numbers)
  );
}
