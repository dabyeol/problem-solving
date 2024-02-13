n, k = map(int, input().split())

measure = 0
count = 0
for i in range(1, n + 1):
    if n % i == 0:
        count += 1
        if count == k:
            measure = i
            break

print(measure)
