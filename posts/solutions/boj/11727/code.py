n = int(input())

prev = 1
curr = 1
for i in range(2, n + 1):
    prev, curr = curr, (prev * 2 + curr) % 10007

print(curr)
