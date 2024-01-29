def solution(myString, pat):
    return int(pat in "".join("B" if c == "A" else "A" for c in myString))
