def solution(todo_list, finished):
    return [t for t, f in zip(todo_list, finished) if not f]
