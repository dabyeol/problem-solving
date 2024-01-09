function solution(arr) {
  return Number(arr.every((row, i) => row.every((v, j) => v === arr[j][i])));
}
