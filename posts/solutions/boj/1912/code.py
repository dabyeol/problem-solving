n = int(input())
array = list(map(int, input().split()))

maxvalue = array[0]
sum = 0
for e in array:
    sum += e
    maxvalue = max(maxvalue, sum)
    sum = max(sum, 0)

print(maxvalue)
