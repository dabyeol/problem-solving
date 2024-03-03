from collections import deque
import sys


def f(graph):
    visited = [-1] * len(graph)
    for i in range(1, len(graph)):
        if visited[i] != -1:
            continue

        q = deque([(i, 0)])
        visited[i] = 0
        while q:
            x, f = q.popleft()
            f ^= 1
            for v in graph[x]:
                if visited[v] == -1:
                    q.append((v, f))
                    visited[v] = f
                elif visited[v] != f:
                    return False

    return True


k = int(input())

for _ in range(k):
    v, e = map(int, input().split())

    graph = [[] for _ in range(v + 1)]
    for _ in range(e):
        u, v = map(int, sys.stdin.readline().split())
        graph[u].append(v)
        graph[v].append(u)

    print("YES" if f(graph) else "NO")
