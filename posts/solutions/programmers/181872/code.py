def solution(myString, pat):
    return myString[: myString.rindex(pat) + len(pat)]
