import { getOj } from './server/oj';

export function getUnsplashUrl(id: string) {
  return `https://source.unsplash.com/${id}`;
}

export function getLevelInfo(oj: string, level: string | number) {
  const levelId =
    typeof level === 'string' ? level.split(' ')[0] : level.toString();
  const color = getOj(oj)?.levels.find(l => l.id === levelId)?.color!;
  const value = typeof level === 'string' ? level.split(' ')[1] : level;

  return {
    color,
    value,
  };
}
