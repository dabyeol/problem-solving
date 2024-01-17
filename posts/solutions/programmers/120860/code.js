function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3]] = dots;
  const a = Math.abs(x1 === x2 ? x1 - x3 : x1 - x2);
  const b = Math.abs(y1 === y2 ? y1 - y3 : y1 - y2);

  return a * b;
}
