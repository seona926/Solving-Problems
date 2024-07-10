def solution(money):
    # Write your code here
    change = money
    result = [0,0,0,0,0,0,0,0,0]
    amount = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
    
    for i, j in enumerate(amount):
        result[i] = change // j
        change = change % j
        
    return result
        
if __name__ == '__main__':