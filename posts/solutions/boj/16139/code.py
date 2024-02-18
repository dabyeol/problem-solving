import sys


s = input()
q = int(input())

array = [[0] * len(s) for _ in range(26)]
for i, row in enumerate(array):
    c = chr(i + ord("a"))
    count = 0
    for j in range(len(row)):
        if s[j] == c:
            row[j] += 1

        row[j] = count

for _ in range(q):
    a, l, r = sys.stdin.readline().split()
    l, r = int(l), int(r)

    i = ord(a) - ord("a")

    print(array[i][r] - (array[i][l - 1] if l else 0))
