function solution(numbers, n) {
  let answer = 0;
  let i = 0;
  while (answer <= n) {
    answer += numbers[i++];
  }

  return answer;
}
