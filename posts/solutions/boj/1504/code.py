from heapq import *
from math import inf
import sys


def f(graph, start):
    q = [(0, start)]
    dist = [inf] * len(graph)
    dist[start] = 0
    while q:
        dx, x = heappop(q)
        for v, dv in graph[x]:
            d = dx + dv
            if d < dist[v]:
                heappush(q, (d, v))
                dist[v] = d

    return dist


n, e = map(int, input().split())

graph = [[] for _ in range(n + 1)]
for _ in range(e):
    a, b, c = map(int, sys.stdin.readline().split())
    graph[a].append((b, c))
    graph[b].append((a, c))

v1, v2 = map(int, input().split())

sdist = f(graph, 1)
v1dist = f(graph, v1)
v2dist = f(graph, v2)
minvalue = min(sdist[v1] + v1dist[v2] + v2dist[n], sdist[v2] + v2dist[v1] + v1dist[n])

print(minvalue if minvalue != inf else -1)
