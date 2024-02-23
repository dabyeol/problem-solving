function solution(lines) {
  const array = new Array(200).fill(0);
  lines.forEach(([start, end]) => {
    for (let i = start; i < end; i++) {
      array[i + 100]++;
    }
  });

  return array.filter(e => e >= 2).length;
}
