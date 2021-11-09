/**********
** 1. Two Sum (easy)
****************************************/


function twoSum(nums: number[], target: number): number[] {
    const seen = {};
    
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        const comp = target - num;
        
        if (comp in seen) return [seen[comp], i];
        
        seen[num] = i;
    }
};


