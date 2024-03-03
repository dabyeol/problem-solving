from itertools import product


def solution(word):
    d = []
    for i in range(1, 6):
        d += ["".join(s) for s in product("AEIOU", repeat=i)]

    d.sort()

    return d.index(word) + 1
