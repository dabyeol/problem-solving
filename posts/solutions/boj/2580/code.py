def isvalid(board, i, j, n):
    for k in range(9):
        if n == board[i][k] or n == board[k][j]:
            return False

    for a in range(i // 3 * 3, i // 3 * 3 + 3):
        for b in range(j // 3 * 3, j // 3 * 3 + 3):
            if n == board[a][b]:
                return False

    return True


def f(board, count=0):
    if count == 81:
        return True

    i = count // 9
    j = count % 9

    if board[i][j] != 0:
        return f(board, count + 1)

    for n in range(1, 10):
        if isvalid(board, i, j, n):
            board[i][j] = n
            if f(board, count + 1):
                return True
            board[i][j] = 0

    return False


board = [list(map(int, input().split())) for _ in range(9)]

f(board)
for row in board:
    print(*row)
