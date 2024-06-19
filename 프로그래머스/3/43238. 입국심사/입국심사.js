function solution(n, times) {
    let left = 1; // 최소 시간
    let right = Math.max(...times) * n; // 최대 시간: 가장 느린 심사관 소요시간 x 인원

    let answer = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // 모든 심사관이 mid 시간 동안 심사할 수 있는 총 인원 수를 계산
        let total = 0;
        for (let time of times) {
            total += Math.floor(mid / time);
        }

        if (total >= n) {
            answer = mid;
            right = mid - 1; // 더 적은 시간 내에 가능성 찾기
        } else {
            left = mid + 1; // 더 많은 시간 필요
        }
    }

    return answer;
}