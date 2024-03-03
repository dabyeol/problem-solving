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


t = int(input())

for _ in range(t):
    n, m, t = map(int, input().split())
    s, g, h = map(int, input().split())

    graph = [[] for _ in range(n + 1)]
    for _ in range(m):
        a, b, d = map(int, sys.stdin.readline().split())

        graph[a].append((b, d))
        graph[b].append((a, d))

    array = []
    sdist = f(graph, s)
    gdist = f(graph, g)
    hdist = f(graph, h)
    for _ in range(t):
        x = int(input())

        if sdist[x] != inf and sdist[x] == min(
            sdist[g] + gdist[h] + hdist[x], sdist[h] + hdist[g] + gdist[x]
        ):
            array.append(x)

    print(*sorted(array))
