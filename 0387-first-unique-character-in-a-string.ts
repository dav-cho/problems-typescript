/**********
** 387. First Unique Character in a String (easy)
*****************************************************/


function firstUniqChar(s: string): number {
    const counts = {};
    
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        
        char in counts ? ++counts[char] : counts[char] = 1;
    }
    
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        
        if (counts[char] === 1) return i;
    }
    
    return -1;
};


var firstUniqChar = function(s) {
    const counts = new Map();
    
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        
        if (char in counts) counts[char][0]++;
        else counts[char] = [1, i];
    }
    
    for (const char in counts) {
        if (counts[char][0] === 1) {
            return counts[char][1];
        }
    }
    
    return -1
};


function firstUniqChar(s: string): number {
    const counts = {};
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] in counts) counts[s[i]]++;
        else counts[s[i]] = 1;
    };
    
    for (let i = 0; i < s.length; ++i) {
        if (counts[s[i]] === 1) return i;
    };
    
    return -1;
};


