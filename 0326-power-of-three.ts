/**********
** 326. Power of Three (easy)
****************************************/

/**
* looping
**/
function isPowerOfThree(n: number): boolean {
    if (n < 1) return false;
    
    while (n % 3 === 0) {
        n /= 3;
    }
    
    return n === 1;
};


function isPowerOfThree(n: number): boolean {
    while (n > 1) {
        if (n % 3) return false;
        
        n /= 3;
    }
    
    return n > 0;
};


/**
* recursive
**/
function isPowerOfThree(n: number): boolean {
    if (n == 1) return true;
    if (n == 0 || n % 3 !== 0) return false;
    
    return isPowerOfThree(n / 3);
};


/**
* 
**/



/**
* 
**/




