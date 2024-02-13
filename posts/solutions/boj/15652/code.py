def f(n, m, start=1):
    if not m:
        return [()]

    array = []
    for i in range(start, n + 1):
        for a in f(n, m - 1, i):
            array.append((i, *a))

    return array


n, m = map(int, input().split())

for a in f(n, m):
    print(*a)
