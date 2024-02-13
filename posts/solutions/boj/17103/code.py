isprime = [True] * 1000001
isprime[0:2] = [False, False]
for i in range(2, 1001):
    if isprime[i]:
        for j in range(i * 2, len(isprime), i):
            isprime[j] = False

t = int(input())

for _ in range(t):
    n = int(input())

    count = 0
    for i in range(2, n // 2 + 1):
        if isprime[i] and isprime[n - i]:
            count += 1

    print(count)
