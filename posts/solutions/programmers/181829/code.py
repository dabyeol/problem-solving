def solution(board, k):
    return sum(
        v for i, row in enumerate(board) for j, v in enumerate(row) if i + j <= k
    )
