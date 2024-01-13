function solution(arr, k) {
  const set = new Set(arr);
  if (set.size < k) {
    return [...set, ...Array(k - set.size).fill(-1)];
  } else {
    return [...set].slice(0, k);
  }
}
