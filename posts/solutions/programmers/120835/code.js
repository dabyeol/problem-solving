function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);

  return emergency.map(n => sorted.indexOf(n) + 1);
}
