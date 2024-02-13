memo = [0] * 101
memo[1:11] = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9]


def p(n):
    if not memo[n]:
        memo[n] = p(n - 5) + p(n - 1)

    return memo[n]


t = int(input())

for _ in range(t):
    n = int(input())

    print(p(n))
