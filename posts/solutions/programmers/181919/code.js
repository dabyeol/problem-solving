function solution(n) {
  let x = n;
  const answer = [x];
  while (x !== 1) {
    if (x % 2 === 0) {
      x /= 2;
    } else {
      x = 3 * x + 1;
    }

    answer.push(x);
  }

  return answer;
}
