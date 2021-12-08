/**********
** 3. Longest Substring Without Repeating Characters
********************************************************/

/**
* sliding window
**/
function lengthOfLongestSubstring(s: string): number {
    const seen = new Set();
    let res = 0;
    let left = 0;
    let right = 0;
    
    while (right < s.length) {
        if (!(seen.has(s[right]))) {
            seen.add(s[right]);
            right++;
        } else {
            seen.delete(s[left]);
            left++;
        }
        
        res = Math.max(res, right - left);
    }
    
    return res;
};


