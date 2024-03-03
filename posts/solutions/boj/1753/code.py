from heapq import *
from math import inf
import sys


v, e = map(int, input().split())
k = int(input())

graph = [[] for _ in range(v + 1)]
for _ in range(e):
    u, v, w = map(int, sys.stdin.readline().split())
    graph[u].append((v, w))

q = [(0, k)]
dist = [inf] * len(graph)
dist[k] = 0
while q:
    dx, x = heappop(q)
    for v, dv in graph[x]:
        d = dx + dv
        if d < dist[v]:
            heappush(q, (d, v))
            dist[v] = d

for d in dist[1:]:
    print(d if d != inf else "INF")
