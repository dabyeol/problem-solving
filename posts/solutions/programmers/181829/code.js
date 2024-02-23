function solution(board, k) {
  let answer = 0;
  board.forEach((row, i) =>
    row.forEach((e, j) => {
      if (i + j <= k) {
        answer += e;
      }
    })
  );

  return answer;
}
