n = int(input())

s = set()
count = 0
for _ in range(n):
    log = input()

    if log == "ENTER":
        count += len(s)
        s.clear()
    else:
        s.add(log)

count += len(s)
print(count)
