from math import sqrt


def solution(n):
    return 1 if sqrt(n).is_integer() else 2
