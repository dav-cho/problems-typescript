/**********
** 461. Hamming Distance (easy)
****************************************/

/**
* brian kernighan's algorithm (flip least significant 1-bit)
**/
function hammingDistance(x: number, y: number): number {
    let xor = x ^ y;
    let count = 0;
    
    while (xor) {
        xor &= xor - 1;
        count++;
    }
    
    return count;
};


/**
* bit shifting
**/
function hammingDistance(x: number, y: number): number {
    let xor = x ^ y;
    let count = 0;
    
    while (xor) {
        if (xor & 1) count++;
        
        xor >>= 1;
    }
    
    return count;
};


/**
* built-in functions
**/
function hammingDistance(x: number, y: number): number {
    let xor = x ^ y;
    
    return [...(xo >>> 0).toString(2)].filter(x => x === '1').length;
};


