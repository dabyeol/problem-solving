from math import inf
import sys


n = int(input())
m = int(input())

graph = [[inf] * n for _ in range(n)]
for _ in range(m):
    a, b, c = map(int, sys.stdin.readline().split())
    graph[a - 1][b - 1] = min(graph[a - 1][b - 1], c)

for i in range(n):
    graph[i][i] = 0

for k in range(n):
    for i in range(n):
        for j in range(n):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

for row in graph:
    print(*[e if e != inf else 0 for e in row])
