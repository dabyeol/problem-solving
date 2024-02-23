function solution(s) {
  const stack = [];
  s.split(' ').forEach(c => {
    if (c === 'Z') {
      stack.pop();
    } else {
      stack.push(Number(c));
    }
  });

  return stack.length ? stack.reduce((acc, cur) => acc + cur) : 0;
}
