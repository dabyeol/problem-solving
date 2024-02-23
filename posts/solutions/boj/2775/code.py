t = int(input())

for _ in range(t):
    k = int(input())
    n = int(input())

    prev = None
    curr = list(range(n + 1))
    for _ in range(k):
        prev = curr[:]
        for i in range(1, n + 1):
            curr[i] = curr[i - 1] + prev[i]

    print(curr[n])
