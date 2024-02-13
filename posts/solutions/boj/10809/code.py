s = input()

arr = []
for i in range(ord("a"), ord("z") + 1):
    arr.append(s.find(chr(i)))

print(*arr)
