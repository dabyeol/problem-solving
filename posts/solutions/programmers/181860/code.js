function solution(arr, flag) {
  const answer = [];
  arr.forEach((v, i) => {
    if (flag[i]) {
      for (let j = 0; j < v * 2; j++) {
        answer.push(v);
      }
    } else {
      for (let j = 0; j < v; j++) {
        answer.pop();
      }
    }
  });

  return answer;
}
