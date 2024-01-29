def solution(code):
    mode = 0
    ret = ""
    for idx, c in enumerate(code):
        if c == "1":
            mode ^= 1
        elif idx % 2 == mode:
            ret += c

    return ret if len(ret) else "EMPTY"
