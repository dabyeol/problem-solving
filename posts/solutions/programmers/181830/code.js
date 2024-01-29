function solution(arr) {
  const r = arr.length;
  const c = arr[0].length;

  if (r === c) {
    return arr;
  }

  const l = Math.max(r, c);
  const answer = [...Array(l)].map(() => new Array(l).fill(0));
  arr.forEach((row, i) => row.forEach((v, j) => (answer[i][j] = v)));

  return answer;
}
