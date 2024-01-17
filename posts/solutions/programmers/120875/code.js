function isParallel(a, b) {
  const [[x1, y1], [x2, y2]] = a;
  const [[x3, y3], [x4, y4]] = b;

  return (x1 - x2) / (y1 - y2) === (x3 - x4) / (y3 - y4);
}

function solution(dots) {
  const [a, b, c, d] = dots;

  return Number(
    isParallel([a, b], [c, d]) ||
      isParallel([a, c], [b, d]) ||
      isParallel([a, d], [b, c])
  );
}
