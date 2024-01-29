function solution(arr) {
  let answer = 0;
  arr.forEach(v => {
    let prev = 0;
    let i = 0;
    while (v !== prev) {
      prev = v;
      if (v >= 50 && v % 2 === 0) {
        v /= 2;
      } else if (v < 50 && v % 2 === 1) {
        v = v * 2 + 1;
      }

      i++;
    }

    answer = Math.max(answer, i - 1);
  });

  return answer;
}
