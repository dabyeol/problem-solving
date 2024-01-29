def solution(order):
    return sum(5000 if "latte" in o else 4500 for o in order)
