function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const [limX, limY] = board.map(v => (v - 1) / 2);
  keyinput.forEach(key => {
    switch (key) {
      case 'up':
        y < limY && y++;
        break;
      case 'down':
        y > -limY && y--;
        break;
      case 'left':
        x > -limX && x--;
        break;
      case 'right':
        x < limX && x++;
    }
  });

  return [x, y];
}
