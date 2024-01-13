function solution(arr, flag) {
  return arr.reduce((acc, cur, i) => {
    if (flag[i]) {
      return [...acc, ...Array(cur * 2).fill(cur)];
    } else {
      return acc.slice(0, -cur);
    }
  }, []);
}
