function solution(my_string, queries) {
  return queries
    .reduce(
      (acc, [s, e]) => {
        acc.splice(s, e - s + 1, ...acc.slice(s, e + 1).reverse());

        return acc;
      },
      [...my_string]
    )
    .join('');
}
