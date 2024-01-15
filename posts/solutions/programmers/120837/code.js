function solution(hp) {
  const a = Math.floor(hp / 5);
  const b = Math.floor((hp % 5) / 3);
  const c = (hp % 5) % 3;

  return a + b + c;
}
