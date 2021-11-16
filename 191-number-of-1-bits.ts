/**********
** 191. Number of 1 Bits (easy)
****************************************/

/**
* bit manipulation - flip least significant 1-bit
**/
function hammingWeight(n: number): number {
    let count = 0;
    
    while (n) {
        n &= n - 1;
        count++;
    }
    
    return count;
};


function hammingWeight(n: number): number {
    let res = 0;
    
    while (n !== 0) {
        n &= n - 1;
        res++;
    }
    
    return res;
};


/**
* zero-fill right shift mask
**/
function hammingWeight(n: number): number {
    let count = 0;
    
    while (n) {
        count += n & 1;
        n >>>= 1;
    }
    
    return count;
};


/**
* loop and bit mask
**/
function hammingWeight(n: number): number {
    let count = 0;
    let mask = 1;
    
    for (let _ = 0; _ < 32; ++_) {
        if (n & mask) count++;
        
        mask <<= 1;
    };
    
    return count;
};


/**
* 
**/



/**
* 
**/



/**
* first attempt
**/
function hammingWeight(n: number): number {
    return [...(n >>> 0).toString(2)].filter(x => x === '1').length;
};


