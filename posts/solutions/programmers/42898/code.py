def solution(m, n, puddles):
    array = [[1] * m for _ in range(n)]
    for a, b in puddles:
        array[b - 1][a - 1] = 0

    for i in range(n):
        for j in range(m):
            if i == j == 0 or not array[i][j]:
                continue

            top = array[i - 1][j] if i else 0
            left = array[i][j - 1] if j else 0
            array[i][j] = (top + left) % 1_000_000_007

    return array[-1][-1]
