def solution(numbers):
    a, b = sorted(numbers, reverse=True)[:2]

    return a * b
