function solution(picture, k) {
  var answer = [];
  picture.forEach(row => {
    const str = [...row].map(c => c.repeat(k)).join('');
    for (let i = 0; i < k; i++) {
      answer.push(str);
    }
  });

  return answer;
}