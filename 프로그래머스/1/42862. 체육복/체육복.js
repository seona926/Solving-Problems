function solution(n, lost, reserve) {
    // 여벌 체육복을 가진 학생이 도난당한 경우를 제외
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));
    
    // 체육수업에 참여할 수 있는 학생 수
    let count = n - realLost.length;
    
    // 빌려줄 수 있는 과정 처리
    realLost.sort((a, b) => a - b);  // lost 정렬
    realReserve.sort((a, b) => a - b);  // reserve 정렬
    
    for (let i = 0; i < realLost.length; i++) {
        let lostStudent = realLost[i];
        
        // 바로 앞번호 학생이 여벌 체육복을 가지고 있는지 확인
        let frontIndex = realReserve.indexOf(lostStudent - 1);
        if (frontIndex !== -1) {
            realReserve.splice(frontIndex, 1);  // 여벌 체육복을 사용했으므로 리스트에서 제거
            count++;
            continue;
        }
        
        // 바로 뒷번호 학생이 여벌 체육복을 가지고 있는지 확인
        let backIndex = realReserve.indexOf(lostStudent + 1);
        if (backIndex !== -1) {
            realReserve.splice(backIndex, 1);  // 여벌 체육복을 사용했으므로 리스트에서 제거
            count++;
        }
    }
    
    return count;
}