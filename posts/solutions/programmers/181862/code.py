import re


def solution(myStr):
    return re.findall(r"[^abc]+", myStr) or ["EMPTY"]
