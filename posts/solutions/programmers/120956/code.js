function solution(babbling) {
  return babbling.reduce(
    (acc, cur) => (/^(aya|ye|woo|ma)+$/.test(cur) ? acc + 1 : acc),
    0
  );
}
