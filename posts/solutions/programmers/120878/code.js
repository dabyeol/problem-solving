function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function solution(a, b) {
  b /= gcd(a, b);
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }

  return b === 1 ? 1 : 2;
}
