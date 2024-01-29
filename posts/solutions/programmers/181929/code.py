def solution(num_list):
    sum = 0
    mul = 1
    for n in num_list:
        sum += n
        mul *= n

    return int(mul < sum**2)
