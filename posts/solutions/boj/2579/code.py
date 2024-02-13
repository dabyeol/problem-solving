n = int(input())
scores = [int(input()) for _ in range(n)]

prev2, prev1, curr = 0, 0, scores[0]
for i in range(1, n):
    prev2, prev1, curr = prev1, curr, max(prev2 + scores[i - 1], prev1) + scores[i]

print(curr)
