n, m = map(int, input().split())
array = list(map(int, input().split()))

left = 0
right = max(array) + 1
while left < right:
    mid = (left + right) // 2
    count = sum(max(h - mid, 0) for h in array)
    if count >= m:
        left = mid + 1
    else:
        right = mid

print(right - 1)
