function solution(arr) {
  let answer = 0;
  arr.forEach(e => {
    let prev = 0;
    let i = 0;
    while (e !== prev) {
      prev = e;
      if (e >= 50 && e % 2 === 0) {
        e /= 2;
      } else if (e < 50 && e % 2 === 1) {
        e = e * 2 + 1;
      }

      i++;
    }

    answer = Math.max(answer, i - 1);
  });

  return answer;
}
