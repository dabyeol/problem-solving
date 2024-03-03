t = int(input())

for _ in range(t):
    n = int(input())

    if n == 0:
        print(1, 0)
        continue

    prev = (1, 0)
    curr = (0, 1)
    for i in range(2, n + 1):
        prev, curr = curr, (prev[0] + curr[0], prev[1] + curr[1])

    print(*curr)
