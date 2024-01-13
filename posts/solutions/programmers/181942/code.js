function solution(str1, str2) {
  var answer = [...str1].reduce(
    (prev, char, index) => prev + char + str2[index],
    ''
  );

  return answer;
}
