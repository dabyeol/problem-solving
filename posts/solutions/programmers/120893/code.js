function solution(my_string) {
  return [...my_string].reduce((acc, cur) => {
    if (cur === cur.toUpperCase()) {
      return acc + cur.toLowerCase();
    } else {
      return acc + cur.toUpperCase();
    }
  }, '');
}
