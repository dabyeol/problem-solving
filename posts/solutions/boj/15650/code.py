def f(n, m, start=1, visited=None):
    if visited is None:
        visited = [False] * (n + 1)

    if not m:
        return [()]

    array = []
    for i in range(start, n + 1):
        if visited[i]:
            break

        visited[i] = True
        for a in f(n, m - 1, i + 1, visited):
            array.append((i, *a))
        visited[i] = False

    return array


n, m = map(int, input().split())

for a in f(n, m):
    print(*a)
