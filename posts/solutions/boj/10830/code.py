def mul(a, b):
    c = [[0] * len(b[0]) for _ in range(len(a))]
    for i in range(len(a)):
        for j in range(len(b[0])):
            for x in range(len(b)):
                c[i][j] += a[i][x] * b[x][j]
                c[i][j] %= 1000

    return c


def pow(a, b):
    if b == 1:
        return [[n % 1000 for n in row] for row in a]

    if b % 2 == 0:
        return pow(mul(a, a), b // 2)
    else:
        return mul(pow(mul(a, a), b // 2), a)


n, b = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]

for row in pow(a, b):
    print(*row)
