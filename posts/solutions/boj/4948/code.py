isprime = [True] * 1000001
isprime[0:2] = [False, False]
for i in range(2, 1001):
    if isprime[i]:
        for j in range(i * 2, len(isprime), i):
            isprime[j] = False

while True:
    n = int(input())

    if not n:
        break

    print(sum(int(isprime[i]) for i in range(n + 1, 2 * n + 1)))
