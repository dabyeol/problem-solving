function solution(before, after) {
  [...before].forEach(c => (after = after.replace(c, '')));

  return Number(after.length === 0);
}
