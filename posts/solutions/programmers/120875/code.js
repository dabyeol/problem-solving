function gradient([x1, y1], [x2, y2]) {
  return (x1 - x2) / (y1 - y2);
}

function solution(dots) {
  const [a, b, c, d] = dots;

  return Number(
    gradient(a, b) === gradient(c, d) ||
      gradient(a, c) === gradient(b, d) ||
      gradient(a, d) === gradient(b, c)
  );
}
