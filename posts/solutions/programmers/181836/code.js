function solution(picture, k) {
  const answer = [];
  picture.forEach(row => {
    const str = [...row].map(c => c.repeat(k)).join('');
    for (let i = 0; i < k; i++) {
      answer.push(str);
    }
  });

  return answer;
}
