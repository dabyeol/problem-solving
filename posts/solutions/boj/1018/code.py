n, m = map(int, input().split())
board = [input() for _ in range(n)]

answer = 64
for i in range(n - 7):
    for j in range(m - 7):
        count = 0
        for a in range(8):
            for b in range(8):
                c = "B" if (a + b) % 2 else "W"
                if board[i + a][j + b] == c:
                    count += 1

        answer = min(answer, count, 64 - count)

print(answer)
