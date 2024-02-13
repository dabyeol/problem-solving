while True:
    s = input()

    if s == ".":
        break

    stack = []
    f = True
    for c in s:
        if c == "(" or c == "[":
            stack.append(c)
        elif (c == ")" and (not stack or stack.pop() != "(")) or (
            c == "]" and (not stack or stack.pop() != "[")
        ):
            f = False
            break

    if stack:
        f = False

    print("yes" if f else "no")
