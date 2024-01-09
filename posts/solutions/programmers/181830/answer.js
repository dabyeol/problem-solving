function solution(arr) {
  const r = arr.length;
  const c = arr[0].length;
  if (r > c) {
    return arr.map(row => [...row, ...Array(r - c).fill(0)]);
  } else {
    return [
      ...arr,
      ...Array(c - r)
        .fill()
        .map(() => new Array(c).fill(0)),
    ];
  }
}
