from collections import deque
import sys


n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]
for _ in range(m):
    u, v = map(int, sys.stdin.readline().split())

    graph[u].append(v)
    graph[v].append(u)

count = 0
visited = [False] * (n + 1)
for i in range(1, n + 1):
    if visited[i]:
        continue

    count += 1

    q = deque([i])
    visited[i] = True
    while q:
        x = q.popleft()
        for v in graph[x]:
            if not visited[v]:
                q.append(v)
                visited[v] = True

print(count)
