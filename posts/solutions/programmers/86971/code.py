from collections import deque
from itertools import combinations


def solution(n, wires):
    c = combinations(wires, len(wires) - 1)
    answer = n
    for w in c:
        graph = [[] for _ in range(n + 1)]
        for v1, v2 in w:
            graph[v1].append(v2)
            graph[v2].append(v1)

        q = deque([1])
        visited = [False] * (n + 1)
        visited[1] = True
        while q:
            x = q.popleft()
            for u in graph[x]:
                if not visited[u]:
                    q.append(u)
                    visited[u] = True

        diff = abs(n - 2 * sum(visited))
        answer = min(answer, diff)

    return answer
