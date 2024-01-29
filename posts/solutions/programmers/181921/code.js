function solution(l, r) {
  const answer = [];
  for (let i = l; i <= r; i++) {
    if (String(i).match(/^[05]+$/)) {
      answer.push(i);
    }
  }

  return answer.length ? answer : [-1];
}
