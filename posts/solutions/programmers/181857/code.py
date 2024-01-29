from math import ceil, log2


def solution(arr):
    length = 2 ** ceil(log2(len(arr)))

    return arr + [0] * (length - len(arr))
