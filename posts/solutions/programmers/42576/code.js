function solution(participant, completion) {
  const map = new Map();
  completion.forEach(c => map.set(c, (map.get(c) ?? 0) + 1));

  for (const p of participant) {
    if (!map.get(p)) {
      return p;
    }

    map.set(p, map.get(p) - 1);
  }
}
