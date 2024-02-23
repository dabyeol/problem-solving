from collections import deque


n, m, v = map(int, input().split())

graph = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for u in graph:
    u.sort()

stack = [v]
visited = [0] * (n + 1)
dfs = []
while stack:
    x = stack.pop()

    if visited[x]:
        continue

    visited[x] = True
    dfs.append(x)
    for u in reversed(graph[x]):
        if not visited[u]:
            stack.append(u)

q = deque([v])
visited = [0] * (n + 1)
visited[v] = True
bfs = []
while q:
    x = q.popleft()
    bfs.append(x)
    for u in graph[x]:
        if not visited[u]:
            visited[u] = True
            q.append(u)

print(*dfs)
print(*bfs)
