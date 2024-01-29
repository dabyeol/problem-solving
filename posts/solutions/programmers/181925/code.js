function solution(numLog) {
  let answer = '';
  [...numLog].reduce((acc, cur) => {
    switch (cur - acc) {
      case 1:
        answer += 'w';
        break;
      case -1:
        answer += 's';
        break;
      case 10:
        answer += 'd';
        break;
      case -10:
        answer += 'a';
        break;
    }

    return cur;
  });

  return answer;
}
