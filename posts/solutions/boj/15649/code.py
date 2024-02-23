def f(n, m, visited=None):
    if visited is None:
        visited = [False] * (n + 1)

    if not m:
        return [()]

    array = []
    for i in range(1, n + 1):
        if not visited[i]:
            visited[i] = True
            for a in f(n, m - 1, visited):
                array.append((i, *a))
            visited[i] = False

    return array


n, m = map(int, input().split())

for a in f(n, m):
    print(*a)
