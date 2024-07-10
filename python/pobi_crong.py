def solution(pobi, crong):
    # Write your code here
    def caculate(page):
        plus = 0
        multi = 1
        for i in list(str(page)):
            plus += int(i)
            multi *= int(i)
        return max([plus, multi])
        
    if pobi[1] - pobi[0] != 1 or crong[1] - crong[0] != 1:
        return -1
        
    pobibig = 0
    crongbig = 0
    pobibig = max([caculate(pobi[0]), caculate(pobi[1])])
    crongbig = max([caculate(crong[0]), caculate(crong[1])])
    
    if pobibig > crongbig:
        return 1
    elif pobibig < crongbig:
        return 2
    else:
        return 0