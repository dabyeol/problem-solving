def f(n):
    return f(n - 1) + f(n - 2) if n >= 2 else n


n = int(input())

print(f(n))
