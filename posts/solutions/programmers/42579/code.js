function solution(genres, plays) {
  const map = new Map();
  genres.forEach((genre, i) => {
    const g = map.get(genre) || { plays: 0, songs: [] };
    g.plays += plays[i];
    g.songs.push([i, plays[i]]);

    map.set(genre, g);
  });

  const sorted = [...map.values()].sort((a, b) => b.plays - a.plays);
  return sorted.flatMap(({ songs }) =>
    songs
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2)
      .map(([i]) => i)
  );
}
