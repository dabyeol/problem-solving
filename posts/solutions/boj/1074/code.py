def f(n, r, c):
    if n == 0:
        return 0

    n -= 1
    length = 2**n
    i = 0
    if r >= length:
        i += 2
    if c >= length:
        i += 1

    return length**2 * i + f(n, r % length, c % length)


n, r, c = map(int, input().split())

print(f(n, r, c))
