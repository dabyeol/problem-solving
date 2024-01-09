function solution(strArr) {
  const map = new Map();
  strArr.forEach(str => map.set(str.length, (map.get(str.length) ?? 0) + 1));

  return Math.max(...map.values());
}
