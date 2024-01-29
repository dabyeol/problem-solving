def solution(my_string, num1, num2):
    array = list(my_string)
    array[num1], array[num2] = [array[num2], array[num1]]

    return "".join(array)
