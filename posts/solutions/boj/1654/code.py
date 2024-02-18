k, n = map(int, input().split())
array = [int(input()) for _ in range(k)]

left = 1
right = max(array) + 1
while left < right:
    mid = (left + right) // 2
    count = sum(l // mid for l in array)
    if count >= n:
        left = mid + 1
    else:
        right = mid

print(right - 1)
