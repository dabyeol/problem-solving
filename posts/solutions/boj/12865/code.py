n, k = map(int, input().split())
array = [tuple(map(int, input().split())) for _ in range(n)]

prev = None
curr = [0] * (k + 1)
for w, v in array:
    prev = curr[:]
    for i in range(w, k + 1):
        curr[i] = max(prev[i], prev[i - w] + v)

print(curr[-1])
