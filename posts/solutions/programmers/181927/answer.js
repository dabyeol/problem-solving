function solution(num_list) {
  const a = num_list.at(-1);
  const b = num_list.at(-2);
  const e = a > b ? a - b : a * 2;

  return [...num_list, e];
}
