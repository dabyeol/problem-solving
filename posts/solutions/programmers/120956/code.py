import re


def solution(babbling):
    answer = 0
    for s in babbling:
        if re.match(r"^(aya|ye|woo|ma)+$", s):
            answer += 1

    return answer
