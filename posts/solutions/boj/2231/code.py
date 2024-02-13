n = int(input())

m = 0
for i in range(1, n):
    if n == i + sum(map(int, str(i))):
        m = i
        break

print(m)
