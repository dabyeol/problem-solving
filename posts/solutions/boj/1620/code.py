import sys


n, m = map(int, input().split())

d = dict()
for i in range(1, n + 1):
    pokemon = sys.stdin.readline().rstrip()
    d[i] = pokemon
    d[pokemon] = i

for _ in range(m):
    s = sys.stdin.readline().rstrip()
    if s.isdigit():
        print(d[int(s)])
    else:
        print(d[s])
