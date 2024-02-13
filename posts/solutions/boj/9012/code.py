t = int(input())

for _ in range(t):
    ps = input()

    depth = 0
    vps = True
    for p in ps:
        if p == "(":
            depth += 1
        else:
            if depth == 0:
                vps = False
                break

            depth -= 1

    if depth:
        vps = False

    print("YES" if vps else "NO")
