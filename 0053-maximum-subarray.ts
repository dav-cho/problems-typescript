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


/**
* divide and conquer
**/
function maxSubArray(nums: number[]): number {
    const helper = (left, right) => {
        if (left > right) return -Infinity;
        
        const mid = Math.floor((left + right) / 2);
        let curr = 0;
        let leftBest = 0;
        let rightBest = 0;
        
        for (let i = mid - 1; i >= left; --i) {
            curr += nums[i];
            leftBest = Math.max(leftBest, curr);
        }
        
        curr = 0;
        
        for (let i = mid + 1; i <= right; ++i) {
            curr += nums[i];
            rightBest = Math.max(rightBest, curr);
        }
        
        const res = nums[mid] + leftBest + rightBest;
        const leftRes = helper(left, mid - 1);
        const rightRes = helper(mid + 1, right);
        
        return Math.max(res, leftRes, rightRes);
    }
    
    return helper(0, nums.length - 1);
};


