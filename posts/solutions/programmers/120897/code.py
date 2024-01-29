def solution(n):
    return [v for v in range(1, n + 1) if n % v == 0]
