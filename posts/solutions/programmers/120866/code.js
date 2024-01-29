function solution(board) {
  const map = [...Array(board.length)].map(() =>
    new Array(board.length).fill(1)
  );
  board.forEach((row, i) =>
    row.forEach((col, j) => {
      if (col) {
        for (let n = i - 1; n <= i + 1; n++) {
          for (let m = j - 1; m <= j + 1; m++) {
            if (n >= 0 && n < board.length && m >= 0 && m < board.length) {
              map[n][m] = 0;
            }
          }
        }
      }
    })
  );

  return map.flat().reduce((acc, cur) => acc + cur);
}
