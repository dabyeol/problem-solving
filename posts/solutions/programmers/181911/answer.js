function solution(my_strings, parts) {
  return parts.reduce(
    (acc, [s, e], i) => acc + my_strings[i].slice(s, e + 1),
    ''
  );
}
