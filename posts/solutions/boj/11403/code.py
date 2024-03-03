n = int(input())
graph = [list(map(int, input().split())) for _ in range(n)]

for k in range(n):
    for i in range(n):
        for j in range(n):
            graph[i][j] |= graph[i][k] & graph[k][j]

for row in graph:
    print(*row)
