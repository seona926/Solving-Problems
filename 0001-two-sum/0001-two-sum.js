/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let indices = {};
    
    nums.forEach((item, index) => { indices[item] = index });
    
    for (let i = 0; i < nums.length; i++) {
        let findNum = target - nums[i];
  
        if((indices[findNum] !== i) && (findNum.toString() in indices)) {
            return [indices[findNum], i];
        }
    }
};