function solution(prices) {
  return prices.map((p, i) => {
    let count = 1;
    while (p <= prices[i + count]) {
      count++;
    }

    if (!prices[i + count]) {
      count--;
    }

    return count;
  });
}
