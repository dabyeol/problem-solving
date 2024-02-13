array = [[""] * 15 for _ in range(5)]
for row in array:
    for i, c in enumerate(input()):
        row[i] = c

print("".join(array[j][i] for i in range(15) for j in range(5)))
