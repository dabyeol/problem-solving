function solution(polynomial) {
  let [a, b] = [0, 0];
  polynomial.split(' + ').forEach(n => {
    if (isNaN(n)) {
      a += Number(n.padStart(2, 1).slice(0, -1));
    } else {
      b += Number(n);
    }
  });

  if (a && b) {
    return `${a > 1 ? a : ''}x + ${b}`;
  } else if (a) {
    return `${a > 1 ? a : ''}x`;
  } else {
    return b.toString();
  }
}
