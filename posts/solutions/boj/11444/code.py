def mul(a, b):
    c = [[0] * 2 for _ in range(2)]
    for i in range(2):
        for j in range(2):
            for x in range(2):
                c[i][j] += a[i][x] * b[x][j]
                c[i][j] %= 1_000_000_007

    return c


def pow(n, k):
    if k == 1:
        return n

    if k % 2 == 0:
        return pow(mul(n, n), k // 2)
    else:
        return mul(pow(mul(n, n), k // 2), n)


n = int(input())

print(pow([[1, 1], [1, 0]], n)[0][1])
