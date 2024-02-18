s = input()

array = s.split("-", 1)
value = 0
for v in array[0].split("+"):
    value += int(v)

if len(array) > 1:
    for v in array[1].replace("-", "+").split("+"):
        value -= int(v)

print(value)
