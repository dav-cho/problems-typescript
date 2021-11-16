/**********
** 190. Reverse Bits (easy)
****************************************/

/**
* bit by bit
**/
function reverseBits(n: number): number {
    let res = 0;
    
    for (let i = 0; i < 32; ++i) {
        res = (res * 2) + (n & 1);
        n >>= 1;
    }
    
    return res;
};


function reverseBits(n: number): number {
    let res = 0;
    
    for (let i = 0; i < 32; ++i) {
        res = (res * 2) + (n & 1)
        n >>>= 1;
    }
    
    return res;
};


function reverseBits(n: number): number {
    let res = 0;
    let power = 32;
    
    while (power--) {
        res = (res * 2) + (n & 1);
        n >>= 1;
    }
    
    return res;
};


function reverseBits(n: number): number {
    let res = 0;
    
    for (let i = 31; i >= 0; --i) {
        res = (res * 2) + (n & 1);
        n >>= 1;
    }
    
    return res;
};


function reverseBits(n: number): number {
    let res = 0;
    
    for (let i = 31; i >= 0; --i) {
        res = (res * 2) + (n & 1);
        n >>>= 1;
    }
    
    return res;
};


/**
* byte by byte with memoization
**/



/**
* mask and shift
**/



/**
* 
**/



