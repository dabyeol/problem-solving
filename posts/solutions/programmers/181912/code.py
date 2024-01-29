def solution(intStrs, k, s, l):
    answer = []
    for intStr in intStrs:
        n = int(intStr[s : s + l])
        if n > k:
            answer.append(n)

    return answer
