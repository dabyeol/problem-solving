function solution(num_list) {
  const a = Number(num_list.filter(num => num % 2 === 1).join(''));
  const b = Number(num_list.filter(num => num % 2 === 0).join(''));

  return a + b;
}
