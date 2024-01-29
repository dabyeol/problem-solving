function solution(dots) {
  const [[x1, y1], , , [x2, y2]] = [...dots].sort(
    ([x1, y1], [x2, y2]) => x1 - x2 || y1 - y2
  );

  return (x2 - x1) * (y2 - y1);
}
