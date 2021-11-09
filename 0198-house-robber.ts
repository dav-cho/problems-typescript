/**********
** 198. House Robber (medium)
****************************************/

/**
* best solution - from discuss
**/
function rob(nums: number[]): number {
    let prev = 0, curr = 0;
    
    for (const num of nums) {
        [prev, curr] = [curr, Math.max(curr, prev + num)];
    }
    
    return curr;
};


/**
* optimized dynamic programming - top down
**/
function rob(nums: number[]): number {
    const len = nums.length;
    let nextHouse = nums[len - 1];
    let nextNextHouse = 0;
    
    for (let i = len - 2; i >= 0; --i) {
        const curr = Math.max(nextHouse, nextNextHouse + nums[i]);
        nextNextHouse = nextHouse;
        nextHouse = curr;
    }
    
    return nextHouse;
};


/**
* optimized dynamic programming - bottom up
**/
function rob(nums: number[]): number {
    let nextHouse = nums[0];
    let nextNextHouse = 0;
    
    for (let i = 1; i < nums.length; ++i) {
        const curr = Math.max(nextHouse, nextNextHouse + nums[i]);
        nextNextHouse = nextHouse;
        nextHouse = curr;
    }
    
    return nextHouse;
};


/**
* dynamic programming - top down
**/
function rob(nums: number[]): number {
    const len = nums.length;
    const memo = {};
    
    memo[len] = 0;
    memo[len - 1] = nums[len - 1];
    
    for (let i = len - 2; i >= 0; --i) {
        memo[i] = Math.max(memo[i + 1], memo[i + 2] + nums[i]);
    }
    
    return memo[0];
};


/**
* dynamic programming - bottom up
**/
function rob(nums: number[]): number {
    const len = nums.length;
    const memo = new Array(len + 1).fill(null);
    
    memo[0] = 0;
    memo[1] = nums[0];
    
    for (let i = 2; i < len + 1; ++i) {
        memo[i] = Math.max(memo[i - 1], memo[i - 2] + nums[i - 1]);
    }
    
    return memo[len];
};


function rob(nums: number[]): number {
    const memo = { 0: 0, 1: nums[0] };
    
    for (let i = 1; i < nums.length; ++i) {
        memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
    }
    
    return memo[nums.length];
};


/**
* recursive with memoization - bottom up
**/
function rob(nums: number[]): number {
    const memo = {};
    
    const helper = i => {
        if (i >= nums.length) return 0;
        if (i in memo) return memo[i];
        
        memo[i] = Math.max(helper(i + 1), helper(i + 2) + nums[i]);
        
        return memo[i];
    }
    
    return helper(0);
};


/**
* recursive with memoization - top down
**/
function rob(nums: number[]): number {
    const memo = {};
    
    const helper = i => {
        if (i < 0) return 0;
        if (i in memo) return memo[i];
        
        memo[i] = Math.max(helper(i - 1), helper(i - 2) + nums[i]);
        
        return memo[i];
    }
    
    return helper(nums.length - 1);
};


