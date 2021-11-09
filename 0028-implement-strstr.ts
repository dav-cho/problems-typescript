/**********
** 28. Implement strStr() (easy)
****************************************/


function strStr(haystack: string, needle: string): number {
    if (!needle) return 0;
    if (haystack.length < needle.length) return -1;
    
    for (let i = 0; i < haystack.length - needle.length + 1; ++i) {
        const subStr = haystack.slice(i, i + needle.length);
        
        if (subStr === needle) return i;
    }
    
    return -1;
};


