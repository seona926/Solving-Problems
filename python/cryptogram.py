def solution(cryptogram):
    # Write your code here
    modified = True
    
    while(modified == True):
        modified = False
        for i, j in enumerate(cryptogram):
            if i == 0:
                continue
            if j == cryptogram[i - 1]:
                cryptogram = cryptogram[:i-1] + cryptogram[i+1:]
                modified = True
                break #for종료
    return cryptogram