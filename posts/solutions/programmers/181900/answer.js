function solution(my_string, indices) {
  return [...my_string].reduce(
    (acc, cur, idx) => (indices.includes(idx) ? acc : acc + cur),
    ''
  );
}
