array = list(map(int, input().split()))

sum = 0
for n in array:
    sum += n**2

print(sum % 10)
