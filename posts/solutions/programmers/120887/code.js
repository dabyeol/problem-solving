function solution(i, j, k) {
  let answer = 0;
  for (let n = i; n <= j; n++) {
    answer += n.toString().match(new RegExp(k, 'g'))?.length ?? 0;
  }

  return answer;
}
