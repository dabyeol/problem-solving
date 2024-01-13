function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const filtered = arr.slice(s, e + 1).filter(v => v > k);

    return filtered.length ? Math.min(...filtered) : -1;
  });
}
