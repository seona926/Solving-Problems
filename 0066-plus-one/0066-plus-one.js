/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
    /*
        배열 -> 문자 -> 숫자로 변환 후 +1 -> 배열로 풀려고 하였으나
        숫자가 너무 커지면 문자 -> 숫자 변환시 끝이 000으로 채워지는 현상 발생
        -> 직접 배열에서 더하는 방식 사용
    */
    let carry = 1; // 더할 1

    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        if (sum === 10) {
            digits[i] = 0;
            carry = 1; // 올림을 다음 자릿수에 전달
        } else {
            digits[i] = sum;
            carry = 0; // 더 이상 올림 없음
            break; // 더 이상 반복할 필요 없음
        }
    }

    if (carry === 1) {
        digits.unshift(1); // 최상위 자릿수에 올림이 있는 경우
    }

    return digits;
};