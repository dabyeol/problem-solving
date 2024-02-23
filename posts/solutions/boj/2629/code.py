n = int(input())
w = list(map(int, input().split()))
m = int(input())
array = list(map(int, input().split()))

s = set()
for wi in w:
    tmp = set()
    for si in s:
        tmp.add(abs(wi - si))
        tmp.add(wi + si)

    s |= tmp
    s.add(wi)

answer = []
for e in array:
    answer.append("Y" if e in s else "N")

print(*answer)
