def solution(board):
    l = len(board)
    safe = [[1] * l for _ in board]
    for i, row in enumerate(board):
        for j, col in enumerate(row):
            if col:
                for n in range(max(0, i - 1), min(l, i + 2)):
                    for m in range(max(0, j - 1), min(l, j + 2)):
                        safe[n][m] = 0

    return sum(sum(row) for row in safe)
