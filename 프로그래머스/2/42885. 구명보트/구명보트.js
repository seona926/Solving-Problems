function solution(people, limit) {
    /*
        절차:
        - 사람들을 몸무게를 기준으로 오름차순 정렬
        - 가벼운 사람(people[left])과 가장 무거운 사람(people[right])을 선택
        - 사람의 몸무게 합이 구명보트의 제한(limit)을 넘지 않으면 두 사람을 함께 보낼 수 있음
            -> left를 증가시키고 right를 감소
        - 몸무게 합이 제한을 초과하면 무거운 사람만 보낼 수 있으므로 right만 감소
        - 모든 사람을 처리할 때까지 위 과정을 반복
    */
    
    people.sort((a, b) => a - b); // 사람들을 몸무게 순으로 정렬
    
    let left = 0;
    let right = people.length - 1;
    let boats = 0;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) { // 두 사람씩 태움
            left++; // 가장 가벼운 사람과 가장 무거운 사람 함께 태움
        }
        right--; // 가장 무거운 사람은 항상 태움
        boats++;
    }
    
    return boats;
}

