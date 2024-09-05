/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // s의 구성요소들을 소문자로 변환 후 배열에 넣고
    // 현재 길이가 2 이상이라면
    // shift === pop 이면 true 아니면 false


    let letterArr = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
    
    // 앞뒤에서 비교하는 while 루프 사용
    while (letterArr.length > 1) {
        if (letterArr.shift() !== letterArr.pop()) {
            return false;  // 앞뒤가 다르면 palindrome이 아님
        }
    }
    
    return true;
};