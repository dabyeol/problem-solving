function solution(arr) {
  return arr.flatMap(a => new Array(a).fill(a));
}
