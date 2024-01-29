function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const [lx, ly] = board.map(l => (l - 1) / 2);
  keyinput.forEach(key => {
    switch (key) {
      case 'up':
        y < ly && y++;
        break;
      case 'down':
        y > -ly && y--;
        break;
      case 'left':
        x > -lx && x--;
        break;
      case 'right':
        x < lx && x++;
    }
  });

  return [x, y];
}
