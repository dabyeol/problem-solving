def solution(numbers):
    sort = sorted(numbers)

    return max(sort[0] * sort[1], sort[-1] * sort[-2])
