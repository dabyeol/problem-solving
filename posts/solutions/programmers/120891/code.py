import re


def solution(order):
    return len(re.findall(r"[369]", str(order)))
