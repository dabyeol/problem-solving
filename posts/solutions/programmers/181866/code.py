import re


def solution(myString):
    return sorted(re.findall(r"[^x]+", myString))
