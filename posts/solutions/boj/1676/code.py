from math import factorial


n = int(input())

f = factorial(n)
count = 0
while f % 10 == 0:
    count += 1
    f //= 10

print(count)
