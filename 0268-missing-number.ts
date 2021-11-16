/**********
** 268. Missing Number (easy)
****************************************/

/**
* gauss' formula
**/
function missingNumber(nums: number[]): number {
    const len = nums.length;
    const expectedSum = len * (len + 1) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num);
    
    return expectedSum - actualSum;
};


/**
* bit manipulation
**/
function missingNumber(nums: number[]): number {
    let xor = nums.length;
    
    for (let i = 0; i < nums.length; ++i) {
        xor ^= i ^ nums[i];
    }
    
    return xor;
};


/**
* hash set
**/
function missingNumber(nums: number[]): number {
    const seen = new Set(nums);
    
    for (let i = 0; i <= nums.length; ++i) {
        if (!seen.has(i)) return i;
    }
};


/**
* sorting
**/
function missingNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; ++i) {
        if (i !== nums[i]) return i;
    }
    
    return nums[nums.length - 1] + 1;
};


