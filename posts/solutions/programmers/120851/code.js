function solution(my_string) {
  return my_string
    .match(/\d/g)
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}
