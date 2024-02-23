def solution(lines):
    array = [0] * 200
    for a, b in lines:
        for i in range(a, b):
            array[i + 100] += 1

    return sum(e >= 2 for e in array)
