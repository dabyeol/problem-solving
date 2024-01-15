function solution(array) {
  const map = new Map();
  array.forEach(n => map.set(n, (map.get(n) ?? 0) + 1));
  const [a, b] = [...map].sort(([, a], [, b]) => b - a);

  return a[1] === b?.[1] ? -1 : a[0];
}
