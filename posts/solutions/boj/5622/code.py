dial = ["", "", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"]
s = input()

time = 0
for c in s:
    for i, d in enumerate(dial):
        if c in d:
            time += i
            break

print(time)
