import string


n, b = map(int, input().split())

c = string.digits + string.ascii_uppercase
s = ""
while n:
    s = c[n % b] + s
    n //= b

print(s)
