n = int(input())
a = list(map(int, input().split()))
m = int(input())
array = list(map(int, input().split()))

s = set(a)
for v in array:
    print(int(v in s))
