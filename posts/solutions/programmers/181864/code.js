function solution(myString, pat) {
  const string = [...myString].reduce(
    (acc, cur) => acc + (cur === 'A' ? 'B' : 'A'),
    ''
  );

  return Number(string.includes(pat));
}
