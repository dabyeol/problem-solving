function solution(s) {
  const stack = [];
  s.split(' ').forEach(v => {
    if (v === 'Z') {
      stack.pop();
    } else {
      stack.push(Number(v));
    }
  });

  return stack.length ? stack.reduce((acc, cur) => acc + cur) : 0;
}
