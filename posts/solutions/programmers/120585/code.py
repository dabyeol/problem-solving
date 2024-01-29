def solution(array, height):
    return sum(h > height for h in array)
