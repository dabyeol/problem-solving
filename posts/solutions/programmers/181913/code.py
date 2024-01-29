def solution(my_string, queries):
    answer = my_string
    for s, e in queries:
        answer = answer[:s] + answer[s : e + 1][::-1] + answer[e + 1 :]

    return answer
