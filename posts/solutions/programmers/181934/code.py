def solution(ineq, eq, n, m):
    if eq == "=" and n == m:
        return 1

    return int(n < m if ineq == "<" else n > m)
