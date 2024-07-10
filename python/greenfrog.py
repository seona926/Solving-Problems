def solution(word):
    # Write your code here
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lower = upper.lower()
    result = ""
    
    for i in word:
        if i in upper:
            result += upper[(upper.index(i) * -1)+(-1)]
        elif i in lower:
            result += lower[(lower.index(i) * -1)+(-1)]
        else:
            result += i
    return result