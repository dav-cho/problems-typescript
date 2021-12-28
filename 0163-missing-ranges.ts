/**********
** 163. Missing Ranges (easy)
****************************************/

/**
* linear scan
**/
function findMissingRanges(nums: number[], lower: number, upper: number): string[] {
    const res = [];
    let prev = lower - 1;
    
    for (let i = 0; i <= nums.length; ++i) {
        const curr = i < nums.length ? nums[i] : upper + 1;
        
        if (prev + 1 < curr - 1) {
            res.push(`${prev + 1}->${curr - 1}`);
        } else if (prev + 1 === curr - 1) {
            res.push((prev + 1).toString());
        }
        
        prev = curr;
    }
    
    return res;
};


