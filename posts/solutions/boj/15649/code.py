def f(n, m, isvisited=None):
    if isvisited is None:
        isvisited = [False] * (n + 1)

    if not m:
        return [()]

    array = []
    for i in range(1, n + 1):
        if not isvisited[i]:
            isvisited[i] = True
            for a in f(n, m - 1, isvisited):
                array.append((i, *a))
            isvisited[i] = False

    return array


n, m = map(int, input().split())

for a in f(n, m):
    print(*a)
