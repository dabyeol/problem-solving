function solution(arr, k) {
  if (k % 2 === 1) {
    return arr.map(e => e * k);
  } else {
    return arr.map(e => e + k);
  }
}
