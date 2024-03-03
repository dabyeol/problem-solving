from math import inf
import sys


def f(n, edges, start):
    dist = [inf] * (n + 1)
    dist[start] = 0
    for i in range(n):
        for a, b, c in edges:
            if dist[a] != inf and dist[a] + c < dist[b]:
                if i == n - 1:
                    return

                dist[b] = dist[a] + c

    return dist


n, m = map(int, input().split())

edges = []
for _ in range(m):
    a, b, c = map(int, sys.stdin.readline().split())

    edges.append((a, b, c))

dist = f(n, edges, 1)
if dist:
    for d in dist[2:]:
        print(d if d != inf else -1)
else:
    print(-1)
