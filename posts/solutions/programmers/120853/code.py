def solution(s):
    stack = []
    for c in s.split():
        if c == "Z":
            stack.pop()
        else:
            stack.append(int(c))

    return sum(stack)
