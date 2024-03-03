from itertools import permutations
from math import sqrt


def isprime(n):
    if n < 2:
        return False

    for i in range(2, int(sqrt(n)) + 1):
        if n % i == 0:
            return False

    return True


def solution(numbers):
    s = set()
    for i in range(1, len(numbers) + 1):
        p = permutations(numbers, i)
        for n in p:
            n = int("".join(n))
            if isprime(n):
                s.add(n)

    return len(s)
