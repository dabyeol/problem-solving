def solution(arr, queries):
    answer = []
    for s, e, k in queries:
        filtered = [x for x in arr[s : e + 1] if x > k]
        answer.append(min(filtered) if filtered else -1)

    return answer
