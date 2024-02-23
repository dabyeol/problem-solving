def solution(array):
    maxvalue = max(array)

    return [maxvalue, array.index(maxvalue)]
