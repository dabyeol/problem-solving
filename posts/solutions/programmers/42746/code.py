def solution(numbers):
    number = "".join(sorted(map(str, numbers), key=lambda x: x * 3, reverse=True))

    return "0" if number[0] == "0" else number
