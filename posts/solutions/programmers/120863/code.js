function solution(polynomial) {
  let [a, b] = [0, 0];
  polynomial.split(' + ').forEach(n => {
    if (n.includes('x')) {
      a += Number(n.slice(0, -1) || 1);
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
