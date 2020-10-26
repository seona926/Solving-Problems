def solution(dirs):
    x, y = 0, 0
    visited = [(0,0)]
    count = 0
    
    for i in dirs:
        prev = (x, y)
        next = (x, y)
        if i == "U":
            next = (x, y+1)
        elif i == "D":
            next = (x, y-1)
        elif i == "R":
            next = (x+1, y)
        elif i == "L":
            next = (x-1, y)
        if next[0] >= -5 and next[0] <=5 and next[1] >= -5 and next[1] <=5:
            x = next[0]
            y = next[1]
        if prev == (x, y):
            continue
        if (prev, (x, y)) not in visited:
            count += 1
            visited.append((prev, (x, y)))
            visited.append(((x, y), prev))
      
    return count