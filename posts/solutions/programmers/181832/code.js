function solution(n) {
  var answer = [...Array(n)].map(() => []);
  let direction = 'r';
  let i = 0;
  let j = 0;
  for (let k = 1; k <= n ** 2; k++) {
    answer[i][j] = k;
    switch (direction) {
      case 'r':
        if (j + 1 === n || answer[i][j + 1]) {
          direction = 'd';
          i++;
        } else {
          j++;
        }
        break;
      case 'd':
        if (i + 1 === n || answer[i + 1][j]) {
          direction = 'l';
          j--;
        } else {
          i++;
        }
        break;
      case 'l':
        if (j === 0 || answer[i][j - 1]) {
          direction = 'u';
          i--;
        } else {
          j--;
        }
        break;
      case 'u':
        if (i === 0 || answer[i - 1][j]) {
          direction = 'r';
          j++;
        } else {
          i--;
        }
        break;
    }
  }

  return answer;
}
