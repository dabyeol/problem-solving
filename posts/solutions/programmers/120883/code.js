function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);

  if (!map.has(id)) return 'fail';
  if (map.get(id) !== pw) return 'wrong pw';
  return 'login';
}
