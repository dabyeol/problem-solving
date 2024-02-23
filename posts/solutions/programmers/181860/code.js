function solution(arr, flag) {
  const answer = [];
  arr.forEach((e, i) => {
    if (flag[i]) {
      for (let j = 0; j < e * 2; j++) {
        answer.push(e);
      }
    } else {
      for (let j = 0; j < e; j++) {
        answer.pop();
      }
    }
  });

  return answer;
}
