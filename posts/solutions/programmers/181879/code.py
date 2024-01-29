from math import prod


def solution(num_list):
    if len(num_list) > 10:
        return sum(num_list)
    else:
        return prod(num_list)
