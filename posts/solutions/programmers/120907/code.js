function solution(quiz) {
  return quiz.map(q => (eval(q.replace('=', '===')) ? 'O' : 'X'));
}
