function solution(arr, query) {
  return query.reduce((acc, cur, idx) => {
    if (idx % 2 === 0) {
      return acc.slice(0, cur + 1);
    } else {
      return acc.slice(cur);
    }
  }, arr);
}
