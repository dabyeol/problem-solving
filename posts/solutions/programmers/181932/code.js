function solution(code) {
  let mode = 0;
  const ret = [...code].reduce((acc, cur, idx) => {
    if (cur === '1') {
      mode ^= 1;
    } else if (idx % 2 === mode) {
      return acc + cur;
    }

    return acc;
  }, '');

  return ret.length === 0 ? 'EMPTY' : ret;
}
