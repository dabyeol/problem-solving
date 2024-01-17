function solution(n) {
  let answer = n;
  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 || i.toString().includes(3)) {
      answer++;
    }
  }

  return answer;
}
