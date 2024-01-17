function solution(n) {
  return [...n.toString()].map(Number).reduce((acc, cur) => acc + cur);
}
