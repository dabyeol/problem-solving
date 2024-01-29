def solution(n):
    return [[int(i == j) for j in range(n)] for i in range(n)]
