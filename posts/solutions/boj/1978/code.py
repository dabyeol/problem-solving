def isprime(n):
    if n < 2:
        return False

    for i in range(2, n):
        if n % i == 0:
            return False

    return True


n = int(input())
array = map(int, input().split())

print(sum(int(isprime(v)) for v in array))
