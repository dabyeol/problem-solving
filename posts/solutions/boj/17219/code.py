import sys


n, m = map(int, input().split())

d = dict()
for _ in range(n):
    a, p = sys.stdin.readline().split()

    d[a] = p

for _ in range(m):
    a = sys.stdin.readline().rstrip()

    print(d[a])
