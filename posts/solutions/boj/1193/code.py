x = int(input())

i = 1
while x > i:
    x -= i
    i += 1

if i % 2 == 1:
    print(f"{i + 1 - x}/{x}")
else:
    print(f"{x}/{i + 1 - x}")
