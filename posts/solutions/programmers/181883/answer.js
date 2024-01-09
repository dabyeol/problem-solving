function solution(arr, queries) {
  var answer = [...arr];
  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      answer[i]++;
    }
  });

  return answer;
}
