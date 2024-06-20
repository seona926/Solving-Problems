function solution(numbers, target) {
    let count = 0;

    function dfs(index, sum) {
        // 모든 숫자를 사용했을 때
        if (index === numbers.length) {
            // 목표 숫자에 도달하면 경우의 수를 증가
            if (sum === target) {
                count++;
            }
            return;
        }

        // 현재 숫자를 더한 경우
        dfs(index + 1, sum + numbers[index]);
        // 현재 숫자를 뺀 경우
        dfs(index + 1, sum - numbers[index]);
    }

    // 탐색 시작
    dfs(0, 0);
    return count;
}
