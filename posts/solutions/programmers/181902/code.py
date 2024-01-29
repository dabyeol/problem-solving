def solution(my_string):
    answer = [0] * 52
    for c in my_string:
        if c.isupper():
            answer[ord(c) - ord("A")] += 1
        else:
            answer[ord(c) - ord("a") + 26] += 1

    return answer
