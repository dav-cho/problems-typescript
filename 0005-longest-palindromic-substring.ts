/**********
** 
****************************************/

/**
* expand around center
**/
function longestPalindrome(s: string): string {
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        
        return s.slice(left + 1, right);
    }
    
    let res = '';
    
    for (let i = 0; i < s.length; ++i) {
        const a = expandAroundCenter(i, i);
        const b = expandAroundCenter(i, i + 1);
        
        if (a.length > b.length && a.length > res.length) {
            res = a;
        } else if (a.length < b.length && b.length > res.length) {
            res = b;
        }
    }
    
    return res;
};


