/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /*
    - 단계1: Initialize Two Pointers:
        포인터 k: 고유한 요소를 가리킴
        포인터 i: 배열을 순회
        ->k는 배열의 첫 번째 요소부터 시작, i는 두 번째 요소부터 시작
    
    - 단계2: Iterate Through the Array:
        배열을 순회하면서, 현재 요소 nums[i]가 이전 요소 nums[i - 1]와 다른지 확인
        다르면, 고유 요소이므로 nums[k]에 현재 요소를 복사하고, k를 증가시킴
    
    - 단계3: Return the Number of Unique Elements:
        순회가 끝나면 k는 고유한 요소의 개수를 나타냄
    */
    
    if (nums.length === 0) return 0;

    let k = 1; // k는 고유한 요소의 수
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};