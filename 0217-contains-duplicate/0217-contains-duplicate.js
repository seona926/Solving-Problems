/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    let counts = {};

    nums.forEach((num) => {
        if (counts[num] > 0) {
            ++counts[num];
        } else {
            counts[num] = 1;
        }
    })

    for (const key in counts) {
        if (counts[key] > 1) return true
    }
    
    return false
};