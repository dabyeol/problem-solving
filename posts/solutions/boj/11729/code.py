def f(n, a, b, c):
    if n == 1:
        return [(a, c)]

    return [*f(n - 1, a, c, b), (a, c), *f(n - 1, b, a, c)]


n = int(input())

log = f(n, 1, 2, 3)

print(len(log))
for a, b in log:
    print(a, b)
