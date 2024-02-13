n = int(input())
array = [int(input()) for _ in range(n)]

prev2, prev1, curr = 0, 0, array[0]
for i in range(1, n):
    prev2, prev1, curr = (
        prev1,
        curr,
        max(prev2 + array[i - 1] + array[i], prev1 + array[i], curr),
    )

print(curr)
