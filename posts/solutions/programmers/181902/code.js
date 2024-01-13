function solution(my_string) {
  var answer = new Array(52).fill(0);
  [...my_string].forEach(c => {
    if (c === c.toUpperCase()) {
      answer[c.charCodeAt() - 'A'.charCodeAt()]++;
    } else {
      answer[c.charCodeAt() - 'a'.charCodeAt() + 26]++;
    }
  });

  return answer;
}
