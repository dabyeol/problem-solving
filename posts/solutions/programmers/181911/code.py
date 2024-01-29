def solution(my_strings, parts):
    answer = ""
    for string, (s, e) in zip(my_strings, parts):
        answer += string[s : e + 1]

    return answer
