function solution(clothes) {
  const map = new Map();
  clothes.forEach(([, type]) => map.set(type, (map.get(type) ?? 0) + 1));

  return [...map].reduce((acc, [, count]) => acc * (count + 1), 1) - 1;
}
