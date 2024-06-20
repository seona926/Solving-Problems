function solution(name) {
    const n = name.length;
    let answer = 0;
    let move = n - 1; // 최대로 커서 이동 가능한 횟수 초기화
    
    // 알파벳 변경 횟수 계산
    for (let i = 0; i < n; i++) {
        let charCode = name.charCodeAt(i);
        answer += Math.min(charCode - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - charCode + 1);
        
        // 다음에 A가 아닌 문자의 위치 계산
        let next = i + 1;
        while (next < n && name[next] === 'A') {
            next++;
        }
        
        // 좌우 이동 최소화 계산
        move = Math.min(move, i + n - next + Math.min(i, n - next));
    }
    
    answer += move;
    return answer;
}
