n = int(input())
array = [tuple(map(int, input().split())) for _ in range(n)]

time = 0
count = 0
for s, e in sorted(array, key=lambda x: x[::-1]):
    if time <= s:
        time = e
        count += 1

print(count)
