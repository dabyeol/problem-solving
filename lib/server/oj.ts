export const ojList = [
  {
    id: 'boj',
    name: '백준 온라인 저지',
    levels: [
      { id: 'Sprout', color: '#8c2' },
      { id: 'Bronze', color: '#b51' },
      { id: 'Silver', color: '#469' },
      { id: 'Gold', color: '#f90' },
      { id: 'Platinum', color: '#2c8' },
      { id: 'Diamond', color: '#2af' },
      { id: 'Ruby', color: '#f06' },
    ],
  },
  {
    id: 'programmers',
    name: '프로그래머스',
    levels: [
      { id: '0', color: '#06f' },
      { id: '1', color: '#2af' },
      { id: '2', color: '#0c0' },
      { id: '3', color: '#f90' },
      { id: '4', color: '#f60' },
      { id: '5', color: '#c4e' },
    ],
  },
];

export function getOj(id: string) {
  return ojList.find(oj => oj.id === id);
}
