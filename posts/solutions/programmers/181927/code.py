def solution(num_list):
    a = num_list[-1]
    b = num_list[-2]
    n = a - b if a > b else a * 2

    return num_list + [n]
