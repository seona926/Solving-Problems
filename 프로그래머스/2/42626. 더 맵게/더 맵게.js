// 최소힙 구현
class MinHeap {
    constructor() {
        this.heap = [];  // 힙을 저장할 배열
    }
    
    // 부모와 자식 노드의 인덱스를 계산하는 메소드들
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    
    // 부모와 자식 노드가 존재하는지 확인하는 메소드들
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    
    // 부모와 자식 노드의 값을 가져오는 메소드들
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }
    
    // 두 인덱스의 값을 교환하는 메소드
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }
    
    // 힙의 루트 값을 반환하는 메소드
    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }
    
    // 힙의 루트 값을 제거하고 반환하는 메소드
    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();  // 힙의 마지막 값을 루트로 이동
        this.heapifyDown();  // 힙 속성을 유지하도록 재정렬
        return item;
    }
    
    // 힙에 새 값을 추가하는 메소드
    add(item) {
        this.heap.push(item);  // 힙의 마지막에 값을 추가
        this.heapifyUp();  // 힙 속성을 유지하도록 재정렬
    }
    
    // 새로 추가된 값을 올려가며 힙 속성을 유지하는 메소드
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);  // 부모와 자식 값을 교환
            index = this.getParentIndex(index);  // 인덱스를 부모로 이동
        }
    }
    
    // 루트에서부터 내려가며 힙 속성을 유지하는 메소드
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;  // 힙 속성이 유지될 경우 루프 종료
            } else {
                this.swap(index, smallerChildIndex);  // 현재 노드와 더 작은 자식 노드의 값을 교환
            }
            index = smallerChildIndex;  // 인덱스를 자식 노드로 이동
        }
    }
}

/*
    minHeap 객체를 생성하고, 모든 스코빌 지수를 힙에 추가합니다.
    루트 값이 K 이상이 될 때까지 반복하며, 가장 맵지 않은 두 음식을 섞어 새로운 스코빌 지수를 계산하고 힙에 추가합니다.
    모든 음식의 스코빌 지수가 K 이상이 될 수 없는 경우 -1을 반환합니다.
    모든 음식의 스코빌 지수가 K 이상이 될 때의 섞은 횟수를 반환합니다.
*/

function solution(scoville, K) {
    const minHeap = new MinHeap();
    for (const num of scoville) {
        minHeap.add(num);  // 모든 스코빌 지수를 힙에 추가
    }
    
    let mixCount = 0;
    while (minHeap.peek() < K) {
        if (minHeap.heap.length < 2) {
            return -1;  // 모든 음식을 K 이상으로 만들 수 없는 경우
        }
        
        const leastSpicy = minHeap.poll();  // 가장 맵지 않은 음식의 스코빌 지수
        const secondLeastSpicy = minHeap.poll();  // 두 번째로 맵지 않은 음식의 스코빌 지수
        
        const newScoville = leastSpicy + (secondLeastSpicy * 2);  // 새로운 스코빌 지수 계산
        minHeap.add(newScoville);  // 새로운 스코빌 지수를 힙에 추가
        mixCount++;  // 섞은 횟수 증가
    }
    
    return mixCount;  // 모든 음식의 스코빌 지수가 K 이상일 때의 섞은 횟수
}