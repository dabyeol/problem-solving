function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (isNaN(cur) ? acc : acc + Number(cur)),
    0
  );
}
