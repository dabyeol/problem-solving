function solution(n) {
  var answer = [n];
  let x = n;
  while (x !== 1) {
    if (x % 2) {
      x = 3 * x + 1;
    } else {
      x /= 2;
    }
    answer.push(x);
  }

  return answer;
}
