function solution(arr) {
  let x = 0;
  while (true) {
    let count = 0;
    arr = arr.map(n => {
      if (n >= 50 && !(n % 2)) {
        return n / 2;
      } else if (n < 50 && n % 2) {
        return n * 2 + 1;
      }

      count++;
      return n;
    });

    if (count === arr.length) {
      return x;
    }

    x++;
  }
}
