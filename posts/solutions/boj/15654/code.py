def f(array, m, visited=None):
    if visited is None:
        visited = [False] * len(array)

    if not m:
        return [()]

    s = []
    for i, e in enumerate(array):
        if not visited[i]:
            visited[i] = True
            for a in f(array, m - 1, visited):
                s.append((e, *a))
            visited[i] = False

    return s


n, m = map(int, input().split())
array = list(map(int, input().split()))

for row in f(sorted(array), m):
    print(*row)
