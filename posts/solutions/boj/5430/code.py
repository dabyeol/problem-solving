from collections import deque


t = int(input())

for _ in range(t):
    p = input()
    n = int(input())
    x = input()[1:-1]
    x = x.split(",") if x else []

    r = False
    d = deque(x)
    for c in p:
        if c == "R":
            r = not r
        else:
            if not d:
                print("error")
                break

            if r:
                d.pop()
            else:
                d.popleft()
    else:
        if r:
            d.reverse()

        print(f"[{','.join(d)}]")
