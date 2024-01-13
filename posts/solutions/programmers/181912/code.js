function solution(intStrs, k, s, l) {
  return intStrs.reduce((acc, cur) => {
    const n = Number(cur.slice(s, s + l));

    return n > k ? [...acc, n] : acc;
  }, []);
}
