def solution(num_list):
    return sum(len(bin(n)) - 3 for n in num_list)
