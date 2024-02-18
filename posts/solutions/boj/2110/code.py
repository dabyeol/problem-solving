import sys


n, c = map(int, input().split())
x = [int(sys.stdin.readline()) for _ in range(n)]

array = sorted(x)
left = 1
right = (array[-1] - array[0]) // (c - 1) + 1
while left < right:
    mid = (left + right) // 2
    count = 1
    prev = array[0]
    for i in range(1, n):
        if array[i] - prev >= mid:
            count += 1
            prev = array[i]

    if count >= c:
        left = mid + 1
    else:
        right = mid

print(right - 1)
