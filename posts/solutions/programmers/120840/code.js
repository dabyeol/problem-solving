function solution(balls, share) {
  let numer = 1;
  for (let i = balls; i > balls - share; i--) {
    numer *= i;
  }

  let denom = 1;
  for (let i = share; i > 0; i--) {
    denom *= i;
  }

  return numer / denom;
}
