n = int(input())

prev, curr = 1, 1
for i in range(2, n + 1):
    prev, curr = curr, (prev + curr) % 15746

print(curr)
