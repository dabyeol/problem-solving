n = int(input())

x, y = [], []
for _ in range(n):
    xn, yn = map(int, input().split())

    x.append(xn)
    y.append(yn)

print((max(x) - min(x)) * (max(y) - min(y)))
