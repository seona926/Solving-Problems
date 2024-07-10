def solution(n, words):
    flag = False
    visited=[]
    for i in range(len(words)):
        if i < len(words) -1 and  words[i][-1] != words[i+1][0]:
            flag = True
            break
        if words[i] in visited:
            flag = True
            break
        visited.append(words[i])
    if flag == False:
        return [0,0]
    else:
        a = (i + 1) % n + 1
        b =  (i + 1) // n + 1
        return [a,b]