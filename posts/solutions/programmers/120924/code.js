function solution(common) {
  const [a, b, c] = common;

  if (b - a === c - b) {
    return common.at(-1) + (b - a);
  } else {
    return common.at(-1) * (b / a);
  }
}
