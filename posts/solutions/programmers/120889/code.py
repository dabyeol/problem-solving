def solution(sides):
    a, b, c = sorted(sides)

    return 1 if c < a + b else 2
