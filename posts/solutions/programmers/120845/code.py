from math import prod


def solution(box, n):
    return prod(x // n for x in box)
