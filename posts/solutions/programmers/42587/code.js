function solution(priorities, location) {
  const queue = priorities.map((p, i) => [p, i]);
  let answer = 0;
  while (queue.length) {
    const x = queue.shift();
    if (queue.some(([p]) => p > x[0])) {
      queue.push(x);
    } else {
      answer++;
      if (x[1] === location) {
        return answer;
      }
    }
  }
}
