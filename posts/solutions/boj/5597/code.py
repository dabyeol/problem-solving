arr = list(range(1, 31))

for _ in range(28):
    arr.pop(arr.index(int(input())))

print(arr[0])
print(arr[1])
