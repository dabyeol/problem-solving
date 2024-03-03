from collections import deque
from math import inf


n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

minvalue = inf
minindex = -1
for i in range(1, n + 1):
    q = deque([(i, 0)])
    visited = [False] * (n + 1)
    visited[i] = True
    count = 0
    while q:
        x, c = q.popleft()
        c += 1
        for v in graph[x]:
            if not visited[v]:
                count += c
                q.append((v, c))
                visited[v] = True

    if count < minvalue:
        minvalue = count
        minindex = i

print(minindex)
