function solution(board, k) {
  var answer = 0;
  board.forEach((row, i) =>
    row.forEach((v, j) => {
      if (i + j <= k) {
        answer += v;
      }
    })
  );

  return answer;
}