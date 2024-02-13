def isprime(n):
    if n < 2:
        return False

    for i in range(2, n):
        if n % i == 0:
            return False

    return True


m = int(input())
n = int(input())

primes = [i for i in range(m, n + 1) if isprime(i)]

if not primes:
    print(-1)
else:
    print(sum(primes))
    print(primes[0])
