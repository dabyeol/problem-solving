function solution(arr, query) {
  return query.reduce((acc, cur, idx) => {
    if (idx % 2) {
      return acc.slice(cur);
    } else {
      return acc.slice(0, cur + 1);
    }
  }, arr);
}
