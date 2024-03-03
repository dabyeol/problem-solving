from itertools import product


def solution(numbers, target):
    answer = 0
    for p in product(*[(-n, n) for n in numbers]):
        if sum(p) == target:
            answer += 1

    return answer
