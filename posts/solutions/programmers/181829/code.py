def solution(board, k):
    return sum(
        e for i, row in enumerate(board) for j, e in enumerate(row) if i + j <= k
    )
