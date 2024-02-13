n = int(input())

members = []
for _ in range(n):
    age, name = input().split()
    age = int(age)

    members.append((age, name))

for m in sorted(members, key=lambda x: x[0]):
    print(*m)
