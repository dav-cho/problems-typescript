/**********
** 15. 3Sum (medium)
****************************************/

/**
* no extra space (memory efficient)
**/
function threeSum(nums: number[]): number[][] {
    const res = [];
    
    const twoSumII = i => {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const currSum = nums[i] + nums[left] + nums[right];
            
            if (currSum < 0) {
                left++;
            } else if (currSum > 0) {
                right--;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                
                while (left < right && nums[left - 1] === nums[left]) {
                    left++;
                }
            }
        }
    }
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > 0) break;
        else if (i === 0 || nums[i - 1] !== nums[i]) {
            twoSumII(i);
        }
    }
    
    return res;
};


