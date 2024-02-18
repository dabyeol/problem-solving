n = int(input())
p = list(map(int, input().split()))

sum = 0
for i, pi in enumerate(sorted(p)):
    sum += pi * (n - i)

print(sum)
