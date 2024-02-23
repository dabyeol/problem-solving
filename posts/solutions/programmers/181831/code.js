function solution(arr) {
  return Number(arr.every((row, i) => row.every((e, j) => e === arr[j][i])));
}
