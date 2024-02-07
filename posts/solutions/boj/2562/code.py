max = 0
index = 0
for i in range(1, 10):
    n = int(input())
    if n > max:
        max = n
        index = i

print(max)
print(index)
