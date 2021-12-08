/**********
** 58. Length of Last Word (easy)
****************************************/

/**
* one-pass
**/
function lengthOfLastWord(s: string): number {
    let res = 0;
    
    for (let i = s.length - 1; i >= 0; --i) {
        if (s[i] !== ' ') res++;
        else if (res) return res;
    }
    
    return res;
};


/**
* string methods
**/



/**
* first attempt
**/
function lengthOfLastWord(s: string): number {
    s.trim();
    
    let i = s.length - 1;
    let res = 0;
    
    while (i >= 0 && s[i] === ' ') i--;
    while (i >= 0 && s[i] !== ' ') {
        res++;
        i--;
    }
    
    return res;
};


