/**********
** 384. Shuffle an Array (medium)
****************************************/

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */


/**
* fisher-yates algorithm
**/
class Solution {
    nums: number[];
    original: number[];

    constructor(nums: number[]) {
        this.nums = [...nums];
        this.original = nums;
    }

    reset(): number[] {
        this.nums = [...this.original];
        
        return this.nums;
    }

    shuffle(): number[] {
        const len = this.nums.length;
        
        for (let i = 0; i < len; ++i) {
            const randomIdx = Math.floor(Math.random() * (len - i)) + i;
            
            [this.nums[i], this.nums[randomIdx]] = [this.nums[randomIdx], this.nums[i]];
        }
        
        return this.nums;
    }
}


