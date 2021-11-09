/**********
** 7. Reverse Integer (medium)
****************************************/


function reverse(x: number): number {
    const INT_MAX = 2 ** 31;
    const sign = x < 0 ? -1 : 1;
    let res = 0;
    
    x = Math.abs(x);
    
    while (x) {
        res = res * 10 + x % 10;
        x = Math.floor(x / 10);
        
        if (res >= INT_MAX) return 0;
    }
    
    return res * sign;
};


function reverse(x: number): number {
    const INT_MAX = 2 ** 31;
    const sign = x < 0 ? -1 : 1;
    let res = 0;
    
    x = Math.abs(x);
    
    while (x > 0) {
        const digit = x % 10;
        
        x = Math.floor(x / 10);
        res = res * 10 + digit;
        
        if (res > INT_MAX - 1) return 0;
    }
    
    return res * sign;
};


function reverse(x: number): number {
    const MAX_INT = 2 ** 31 - 1
    let sign;
    let rev = 0;
    
    if (x > 0) sign = 1;
    else sign = -1;
    
    x = Math.abs(x);
    
    while (x > 0) {
        const digit = x % 10;
        
        x = Math.floor(x / 10);
        
        rev = rev * 10 + digit;
        
        if (rev > MAX_INT) return 0;
    }
    
    return rev * sign;
};


