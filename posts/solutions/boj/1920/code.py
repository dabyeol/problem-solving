n = int(input())
a = list(map(int, input().split()))
m = int(input())
array = list(map(int, input().split()))

s = set(a)
for e in array:
    print(int(e in s))
