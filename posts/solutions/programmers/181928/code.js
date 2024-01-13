function solution(num_list) {
  const a = Number(num_list.filter(num => num % 2).join(''));
  const b = Number(num_list.filter(num => !(num % 2)).join(''));

  return a + b;
}
