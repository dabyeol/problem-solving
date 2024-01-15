function solution(num_list) {
  const answer = [0, 0];
  num_list.forEach(n => answer[n % 2]++);

  return answer;
}
