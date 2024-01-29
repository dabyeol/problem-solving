def solution(lines):
    array = [0] * 200
    for a, b in lines:
        for i in range(a, b):
            array[i + 100] += 1

    return sum(v >= 2 for v in array)
