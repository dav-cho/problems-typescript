/**********
** 53. Maximum Subarray (easy)
****************************************/

/**
* dynamic programming / kidane's algorithm
**/
function maxSubArray(nums: number[]): number {
    let curr = -Infinity;
    let res = -Infinity;
    
    for (const num of nums) {
        curr = Math.max(num, curr + num);
        res = Math.max(res, curr);
    }
    
    return res;
};


