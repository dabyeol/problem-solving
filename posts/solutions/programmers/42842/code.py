from math import sqrt


def solution(brown, yellow):
    for h in range(1, int(sqrt(yellow)) + 1):
        if yellow % h != 0:
            continue

        w = yellow // h

        if brown == (w + h + 2) * 2:
            return [w + 2, h + 2]
