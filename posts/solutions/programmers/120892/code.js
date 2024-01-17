function solution(cipher, code) {
  return [...cipher].reduce(
    (acc, cur, idx) => (idx % code === code - 1 ? acc + cur : acc),
    ''
  );
}
