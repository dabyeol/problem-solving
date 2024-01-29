function solution(num_str) {
  return [...num_str].map(Number).reduce((acc, cur) => acc + cur);
}
