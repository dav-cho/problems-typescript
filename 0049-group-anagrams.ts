/**********
** 49. Group Anagrams (medium)
****************************************/

/**
* letter count
**/
function groupAnagrams(strs: string[]): string[][] {
    const res = {};
    
    for (const word of strs) {
        const count = new Array(26).fill(0);
        
        for (let i = 0; i < word.length; ++i) {
            count[word.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        
        const countKey = count.join();
        
        countKey in res ? res[countKey].push(word) : res[countKey] = [word];
    }
    
    return Object.values(res);
};


/**
* sorting
**/
function groupAnagrams(strs: string[]): string[][] {
    const res = {};
    
    for (const word of strs) {
        const key = word.split('').sort().join('');
        
        key in res ? res[key].push(word) : res[key] = [word];
    }
    
    return Object.values(res);
};


