n = int(input())
m = int(input())

graph = [[] for _ in range(n + 1)]
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

visited = [False] * (n + 1)
stack = [1]
while stack:
    x = stack.pop()

    if visited[x]:
        continue

    visited[x] = True
    for v in graph[x]:
        if not visited[v]:
            stack.append(v)

print(sum(visited) - 1)
