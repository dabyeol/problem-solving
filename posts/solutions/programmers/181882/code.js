function solution(arr) {
  return arr.map(n => {
    if (n >= 50 && n % 2 === 0) {
      return n / 2;
    } else if (n < 50 && n % 2 === 1) {
      return n * 2;
    }

    return n;
  });
}
