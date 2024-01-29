def gradient(a, b):
    (x1, y1), (x2, y2) = a, b

    return (x1 - x2) / (y1 - y2)


def solution(dots):
    a, b, c, d = dots

    return int(
        gradient(a, b) == gradient(c, d)
        or gradient(a, c) == gradient(b, d)
        or gradient(a, d) == gradient(b, c)
    )
