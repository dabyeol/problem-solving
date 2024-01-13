function solution(myString, pat) {
  const string = [...myString].reduce(
    (acc, cur) => (cur === 'A' ? acc + 'B' : acc + 'A'),
    ''
  );

  return Number(string.includes(pat));
}
