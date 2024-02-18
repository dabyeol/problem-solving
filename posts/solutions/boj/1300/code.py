n = int(input())
k = int(input())

left = 1
right = k + 1
while left < right:
    mid = (left + right) // 2
    index = 0
    for i in range(1, n + 1):
        index += min(n, mid // i)

    if index < k:
        left = mid + 1
    else:
        right = mid

print(left)
