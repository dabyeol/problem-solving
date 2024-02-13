max = -1
row = 0
col = 0
for i in range(9):
    for j, v in enumerate(map(int, input().split())):
        if v > max:
            max = v
            row = i + 1
            col = j + 1

print(max)
print(row, col)
