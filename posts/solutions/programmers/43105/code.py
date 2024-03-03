def solution(triangle):
    for i in range(1, len(triangle)):
        for j in range(i + 1):
            left = triangle[i - 1][j - 1] if j else 0
            right = triangle[i - 1][j] if i != j else 0
            triangle[i][j] += max(left, right)

    return max(triangle[-1])
