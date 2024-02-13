export const ojList = [
  {
    id: 'boj',
    name: '백준 온라인 저지',
    levels: [
      { id: 'Sprout', color: '#ac2' },
      { id: 'Bronze', color: '#b51' },
      { id: 'Silver', color: '#469' },
      { id: 'Gold', color: '#f90' },
      { id: 'Platinum', color: '#2c8' },
      { id: 'Diamond', color: '#0cf' },
      { id: 'Ruby', color: '#f06' },
    ],
  },
  {
    id: 'programmers',
    name: '프로그래머스',
    levels: [
      { id: '0', color: '#28f' },
      { id: '1', color: '#1bf' },
      { id: '2', color: '#4c4' },
      { id: '3', color: '#fa0' },
      { id: '4', color: '#f61' },
      { id: '5', color: '#c5e' },
    ],
  },
];

export function getOj(id: string) {
  return ojList.find(oj => oj.id === id);
}
