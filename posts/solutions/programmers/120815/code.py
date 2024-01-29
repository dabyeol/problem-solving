from math import gcd


def lcm(a, b):
    return a * b / gcd(a, b)


def solution(n):
    return lcm(n, 6) / 6
