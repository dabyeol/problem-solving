function solution(arr) {
  const stk = [];
  arr.forEach(v => {
    while (stk.at(-1) >= v) {
      stk.pop();
    }

    stk.push(v);
  });

  return stk;
}
