s = input()

strs = set()
for i in range(len(s)):
    for j in range(i + 1, len(s) + 1):
        strs.add(s[i:j])

print(len(strs))
