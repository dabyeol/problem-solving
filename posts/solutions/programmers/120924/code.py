def solution(common):
    a, b, c = common[:3]
    if b - a == c - b:
        return common[-1] + (b - a)
    else:
        return common[-1] * (b / a)
