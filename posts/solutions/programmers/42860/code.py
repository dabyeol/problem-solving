import re


def solution(name):
    answer = len(name) - 1
    for m in re.finditer(r"A+", name):
        l = len(name) - m.end()
        r = max(m.start() - 1, 0)
        answer = min(answer, min(2 * l + r, 2 * r + l))

    for c in name:
        answer += min(ord(c) - ord("A"), ord("Z") - ord(c) + 1)

    return answer
