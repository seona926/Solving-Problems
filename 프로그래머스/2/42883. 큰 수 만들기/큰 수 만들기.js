function solution(number, k) {
    const stack = [];
    
    for (let i = 0; i < number.length; i++) {
        // 현재 숫자
        const current = number[i];
        
        // 스택의 마지막 숫자가 현재 숫자보다 작고 제거할 k가 남아있는 경우 스택의 마지막 숫자를 제거
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            k--;
        }
        
        // 스택에 현재 숫자를 추가
        stack.push(current);
    }

    // k가 0보다 크면 뒤에서부터 k개를 자른다
    // 숫자 순서에 따라 위 for문을 다 돌아도 k개가 모두 제거되지 않을 수 있음
    // 뒤에서 부터 자르는게 가장 큰 숫자가 유지됨
    while (k > 0) {
        stack.pop();
        k--;
    }

    // 스택을 문자열로 변환하여 반환
    return stack.join('');
}
