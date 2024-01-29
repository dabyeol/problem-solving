function solution(rsp) {
  return [...rsp].reduce(
    (acc, cur) => acc + (cur === '2' ? 0 : cur === '0' ? 5 : 2),
    ''
  );
}
