def solution(dots):
    [x1, y1], [x2, y2] = sorted(dots)[::3]

    return (x2 - x1) * (y2 - y1)
