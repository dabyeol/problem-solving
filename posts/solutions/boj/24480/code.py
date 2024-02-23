import sys


def dfs(e, r):
    global count
    count += 1
    visited[r] = count
    for x in e[r]:
        if visited[x] == 0:
            dfs(e, x)


n, m, r = map(int, input().split())

graph = [[] for _ in range(n + 1)]
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

for v in graph:
    v.sort(reverse=True)

sys.setrecursionlimit(m + 1)
count = 0
visited = [0] * (n + 1)
dfs(graph, r)

for o in visited[1:]:
    print(o)
