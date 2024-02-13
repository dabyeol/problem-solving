t = int(input())

money = [25, 10, 5, 1]
for _ in range(t):
    c = int(input())
    counts = []
    for m in money:
        counts.append(c // m)
        c %= m

    print(*counts)
