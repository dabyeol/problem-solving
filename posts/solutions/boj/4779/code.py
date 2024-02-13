def f(n):
    return f(n - 1) + " " * (3 ** (n - 1)) + f(n - 1) if n else "-"


while True:
    try:
        n = int(input())

        print(f(n))
    except:
        break
