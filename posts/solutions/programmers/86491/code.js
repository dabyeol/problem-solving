function solution(sizes) {
  const w = Math.max(...sizes.map(([w, h]) => Math.max(w, h)));
  const h = Math.max(...sizes.map(([w, h]) => Math.min(w, h)));

  return w * h;
}
