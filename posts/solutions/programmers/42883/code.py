def solution(number, k):
    stack = []
    for n in number:
        while k and stack and n > stack[-1]:
            k -= 1
            stack.pop()

        stack.append(n)

    return "".join(stack)[: len(stack) - k]
