/**********
** 14. Longest Common Prefix (easy)
****************************************/


function longestCommonPrefix(strs: string[]): string {
    let res = strs[0];
    
    for (let i = 1; i < strs.length; ++i) {
        while (strs[i].indexOf(res) !== 0) {
            res = res.slice(0, res.length - 1);
            
            if (res.length === 0) return '';
        }
    }
    
    return res;
};


