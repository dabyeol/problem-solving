from collections import deque


n = int(input())

grids = [[], []]
for _ in range(n):
    row = input()

    grids[0].append(list(row))
    grids[1].append(list(row.replace("G", "R")))

counts = [0, 0]
q = deque()
d = [(-1, 0), (1, 0), (0, -1), (0, 1)]
for i in range(n):
    for j in range(n):
        for k, grid in enumerate(grids):
            if grid[i][j] != "X":
                counts[k] += 1
                color = grid[i][j]
                q.append((i, j))
                grid[i][j] = "X"
                while q:
                    x, y = q.popleft()
                    for dx, dy in d:
                        a = x + dx
                        b = y + dy
                        if 0 <= a < n and 0 <= b < n and grid[a][b] == color:
                            q.append((a, b))
                            grid[a][b] = "X"

print(*counts)
