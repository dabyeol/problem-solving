n = int(input())
m = int(input())
buttons = input().split() if m else []

count = abs(100 - n)
for c in range(1000000):
    for button in buttons:
        if button in str(c):
            break
    else:
        count = min(count, len(str(c)) + abs(n - c))

print(count)
