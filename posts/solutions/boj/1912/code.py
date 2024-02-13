n = int(input())
array = list(map(int, input().split()))

maxvalue = array[0]
sum = 0
for v in array:
    sum += v
    maxvalue = max(maxvalue, sum)
    sum = max(sum, 0)

print(maxvalue)
