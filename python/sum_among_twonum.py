def solution(a, b):
    answer = 0
    if a < b:
        for i in range(a,b+1,1):
            answer = answer + i
    elif a > b:
        for i in range(b,a+1,1):
            answer = answer + i
    else:
        answer = a
            
    return answer