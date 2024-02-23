s = input()
e = input()

stack = []
for c in s:
    stack.append(c)
    if "".join(stack[-(len(e)) :]) == e:
        for _ in e:
            stack.pop()

print("".join(stack) or "FRULA")
