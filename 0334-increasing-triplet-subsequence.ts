/**********
** 334. Increasing Triplet Subsequence (medium)
***************************************************/

/**
* linear search
**/
function increasingTriplet(nums: number[]): boolean {
    let firstNum = Infinity;
    let secondNum = Infinity;
    
    for (const num of nums) {
        if (num <= firstNum) {
            firstNum = num;
        } else if (num <= secondNum) {
            secondNum = num;
        } else {
            return true;
        }
    }
    
    return false;
};


