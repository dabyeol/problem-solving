def f(paper, x, y, visited, count=1, value=0):
    if not value:
        value = paper[x][y]

    if count == 4:
        return value

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    maxvalue = 0
    for dx, dy in directions:
        a = x + dx
        b = y + dy
        if 0 <= a < len(paper) and 0 <= b < len(paper[0]) and not visited[a][b]:
            visited[a][b] = True
            maxvalue = max(
                maxvalue, f(paper, a, b, visited, count + 1, value + paper[a][b])
            )

            if count == 2:
                maxvalue = max(
                    maxvalue, f(paper, x, y, visited, count + 1, value + paper[a][b])
                )

            visited[a][b] = False

    return maxvalue


n, m = map(int, input().split())
paper = [list(map(int, input().split())) for _ in range(n)]

visited = [[False] * m for _ in range(n)]
maxvalue = 0
for i in range(n):
    for j in range(m):
        visited[i][j] = True
        maxvalue = max(maxvalue, f(paper, i, j, visited))
        visited[i][j] = False

print(maxvalue)
