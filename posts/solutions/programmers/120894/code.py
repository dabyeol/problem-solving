def solution(numbers):
    strings = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ]
    for i, s in enumerate(strings):
        numbers = numbers.replace(s, str(i))

    return int(numbers)
