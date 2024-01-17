function solution(phone_book) {
  const sorted = [...phone_book].sort();

  return !sorted.some((p, i) => sorted[i + 1]?.startsWith(p));
}
