function solution(priorities, location) {
  const queue = priorities.map((p, i) => [p, i]);
  let answer = 0;
  while (queue.length) {
    const v = queue.shift();
    if (queue.some(([p]) => p > v[0])) {
      queue.push(v);
    } else {
      answer++;
      if (v[1] === location) {
        return answer;
      }
    }
  }
}
