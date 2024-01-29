def solution(quiz):
    return ["O" if eval(q.replace("=", "==")) else "X" for q in quiz]
