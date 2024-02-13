from math import sqrt


def isprime(n):
    if n < 2:
        return False

    for i in range(2, int(sqrt(n)) + 1):
        if n % i == 0:
            return False

    return True


t = int(input())

for _ in range(t):
    i = int(input())

    while not isprime(i):
        i += 1

    print(i)
