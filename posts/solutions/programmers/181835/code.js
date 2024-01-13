function solution(arr, k) {
  if (k % 2) {
    return arr.map(v => v * k);
  } else {
    return arr.map(v => v + k);
  }
}
