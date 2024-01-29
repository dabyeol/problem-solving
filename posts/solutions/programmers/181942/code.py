def solution(str1, str2):
    answer = ""
    for c1, c2 in zip(str1, str2):
        answer += c1 + c2

    return answer
