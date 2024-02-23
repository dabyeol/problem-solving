s = input()

array = s.split("-", 1)
value = 0
for e in array[0].split("+"):
    value += int(e)

if len(array) > 1:
    for e in array[1].replace("-", "+").split("+"):
        value -= int(e)

print(value)
