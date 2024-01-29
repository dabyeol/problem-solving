def solution(arr, queries):
    answer = []
    for s, e, k in queries:
        filtered = [v for v in arr[s : e + 1] if v > k]
        answer.append(min(filtered) if filtered else -1)

    return answer
