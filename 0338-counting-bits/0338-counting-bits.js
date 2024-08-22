/**
 * @param {number} n
 * @return {number[]}
 */
let countBits = function(n) {
    let arr = [];
    let result = [];
    
    for (let i = 0; i <= n; i++) {
        let count = 0;
        let binaryString = i.toString(2);
        
        for (let item of binaryString) {
            if (item % 2 === 1) {
              count++;
            }

            binaryString = Math.floor(binaryString / 2);
        }
        
        
        result.push(count);
    }
    
    return result;
};