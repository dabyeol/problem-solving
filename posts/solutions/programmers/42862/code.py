def solution(n, lost, reserve):
    array = [1] * (n + 1)
    array[0] = 0
    for l in lost:
        array[l] = 0
    for r in reserve:
        array[r] += 1

    for i in range(1, n):
        if (not array[i] and array[i + 1] == 2) or (array[i] == 2 and not array[i + 1]):
            array[i] = 1
            array[i + 1] = 1

    return sum(e > 0 for e in array)
