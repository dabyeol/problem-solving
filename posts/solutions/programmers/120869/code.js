function solution(spell, dic) {
  const sorted = [...spell].sort().toString();

  return dic.some(word => [...word].sort().toString() === sorted) ? 1 : 2;
}
