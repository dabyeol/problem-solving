def solution(picture, k):
    answer = []
    for row in picture:
        s = "".join(c * k for c in row)
        for _ in range(k):
            answer.append(s)

    return answer
