def f(n):
    return n * f(n - 1) if n else 1


n = int(input())

print(f(n))
