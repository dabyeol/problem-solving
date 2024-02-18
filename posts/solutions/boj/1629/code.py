def f(a, b, c):
    if b == 1:
        return a % c

    if b % 2 == 0:
        return f(a**2 % c, b // 2, c)
    else:
        return f(a**2 % c, b // 2, c) * a % c


a, b, c = map(int, input().split())

print(f(a, b, c))
