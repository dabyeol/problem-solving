from math import inf
import sys


v, e = map(int, input().split())

graph = [[inf] * v for _ in range(v)]
for _ in range(e):
    a, b, c = map(int, sys.stdin.readline().split())
    graph[a - 1][b - 1] = c

for k in range(v):
    for i in range(v):
        for j in range(v):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

minvalue = min(graph[i][i] for i in range(v))

print(minvalue if minvalue != inf else -1)
