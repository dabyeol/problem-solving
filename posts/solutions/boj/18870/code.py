import sys


n = int(input())
x = list(map(int, sys.stdin.readline().split()))

order = sorted(set(x))
d = dict()
for i, o in enumerate(order):
    d[o] = i

print(*[d[xn] for xn in x])
