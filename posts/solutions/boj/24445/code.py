from collections import deque


def bfs(e, r):
    global count
    count += 1
    visited[r] = count
    q.append(r)
    while q:
        u = q.popleft()
        for v in e[u]:
            if visited[v] == 0:
                count += 1
                visited[v] = count
                q.append(v)


n, m, r = map(int, input().split())

graph = [[] for _ in range(n + 1)]
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

for v in graph:
    v.sort(reverse=True)

count = 0
visited = [0] * (n + 1)
q = deque()
bfs(graph, r)

for o in visited[1:]:
    print(o)
