def solution(d, budget):
    answer = 0
    
    d.sort()
    print(d)
    count = 0
    
    if sum(d) <= budget:
        answer = len(d)
        return answer
    for i in range(len(d)):
        print(d[i])
        count += d[i]
        if count > budget:
            break
    answer = i
        
    return answer