function solution(arr) {
  const stk = [];
  arr.forEach(e => {
    while (stk.at(-1) >= e) {
      stk.pop();
    }

    stk.push(e);
  });

  return stk;
}
