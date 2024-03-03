function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const counts = [a, b, c].map(
    s => answers.filter((a, i) => a === s[i % s.length]).length
  );
  const max = Math.max(...counts);
  const answer = [];
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}
