a = input()
b = input()

prev = None
curr = [0] * len(b)
for i in range(len(a)):
    prev = curr[:]
    for j in range(len(b)):
        if a[i] == b[j]:
            curr[j] = (prev[j - 1] if j else 0) + 1
        else:
            curr[j] = max(prev[j], curr[j - 1] if j else 0)

print(curr[-1])
