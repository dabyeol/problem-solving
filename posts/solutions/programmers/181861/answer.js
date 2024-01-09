function solution(arr) {
  return arr.reduce((acc, cur) => [...acc, ...Array(cur).fill(cur)], []);
}
