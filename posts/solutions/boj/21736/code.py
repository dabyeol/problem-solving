from collections import deque


n, m = map(int, input().split())

q = deque()
campus = []
for i in range(n):
    row = list(input())

    if "I" in row:
        j = row.index("I")
        q.append((i, j))
        row[j] = "X"

    campus.append(row)

directions = [(1, 0), (0, 1), (-1, 0), (0, -1)]
count = 0
while q:
    x, y = q.popleft()
    for dx, dy in directions:
        a = x + dx
        b = y + dy
        if 0 <= a < n and 0 <= b < m and campus[a][b] != "X":
            if campus[a][b] == "P":
                count += 1

            q.append((a, b))
            campus[a][b] = "X"

print(count or "TT")
