array = list(map(int, input().split()))

isascending = True
isdescending = True
for i, n in enumerate(array):
    if i + 1 != n:
        isascending = False

    if 8 - i != n:
        isdescending = False

if isascending:
    print("ascending")
elif isdescending:
    print("descending")
else:
    print("mixed")
