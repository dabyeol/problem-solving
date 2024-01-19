function solution(progresses, speeds) {
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

  const answer = [];
  let count = 1;
  days.reduce((acc, cur) => {
    if (acc >= cur) {
      count++;
      return acc;
    } else {
      answer.push(count);
      count = 1;
      return cur;
    }
  });

  answer.push(count);
  return answer;
}
