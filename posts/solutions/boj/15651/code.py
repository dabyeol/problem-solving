def f(n, m):
    if not m:
        return [()]

    array = []
    for i in range(1, n + 1):
        for a in f(n, m - 1):
            array.append((i, *a))

    return array


n, m = map(int, input().split())

for a in f(n, m):
    print(*a)
