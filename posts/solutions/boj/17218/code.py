a = input()
b = input()

prev = None
curr = [""] * len(b)
for i in range(len(a)):
    prev = curr[:]
    for j in range(len(b)):
        if a[i] == b[j]:
            curr[j] = (prev[j - 1] if j else "") + a[i]
        else:
            top = prev[j]
            left = curr[j - 1] if j else ""
            if len(top) > len(left):
                curr[j] = top
            else:
                curr[j] = left

print(curr[-1])
