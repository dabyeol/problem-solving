function solution(numbers, direction) {
  const answer = [...numbers];
  if (direction === 'left') {
    answer.push(answer.shift());
  } else {
    answer.unshift(answer.pop());
  }

  return answer;
}
