function solution(num_list) {
  const a = num_list.reduce((acc, cur) => acc * cur);
  const b = num_list.reduce((acc, cur) => acc + cur) ** 2;

  return Number(a < b);
}
