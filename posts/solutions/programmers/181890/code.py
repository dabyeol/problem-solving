def solution(str_list):
    for i, c in enumerate(str_list):
        if c == "l":
            return str_list[:i]
        if c == "r":
            return str_list[i + 1 :]

    return []
