function solution(n, control) {
  let answer = n;
  [...control].forEach(char => {
    switch (char) {
      case 'w':
        answer++;
        break;
      case 's':
        answer--;
        break;
      case 'd':
        answer += 10;
        break;
      case 'a':
        answer -= 10;
        break;
    }
  });

  return answer;
}
