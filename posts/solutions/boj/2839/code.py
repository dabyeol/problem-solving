n = int(input())

a = n % 5 // 3
b = n // 5
while b > 0 and a * 3 + b * 5 != n:
    b -= 1
    a = (n - b * 5) // 3

if a * 3 + b * 5 == n:
    print(a + b)
else:
    print(-1)
