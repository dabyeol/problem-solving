function solution(num_list) {
  let a = 0;
  let b = 0;
  num_list.forEach((n, i) => {
    if (i % 2) {
      a += n;
    } else {
      b += n;
    }
  });

  return Math.max(a, b);
}
