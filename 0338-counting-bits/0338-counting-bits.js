/**
 * @param {number} n
 * @return {number[]}
 */
let countBits = function(n) {
    let result = [];
    
    for (let i = 0; i <= n; i++) {
        let binaryString = i.toString(2);
        
        let count = 0;
        for (let item of binaryString) {
            if (item === '1') {
              count++;
            }
        }
        
        result.push(count);
    }
    
    return result;
};