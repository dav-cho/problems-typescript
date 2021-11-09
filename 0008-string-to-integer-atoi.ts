/**********
** 8. String to Integer (atoi) (medium)
******************************************/


function myAtoi(s: string): number {
    const INT_MAX = 2 ** 31
    const len = s.length;
    let i = 0;
    let sign = 1;
    let res = 0;

    while (i < len && s[i] === ' ') i++;
    
    if (i < len && ['-', '+'].includes(s[i])) {
        if (s[i] == '-') sign = -1;
        i++;
    }
    
    while (i < len && s[i] >= '0' && s[i] <= '9') {
        res = res * 10 + +s[i];
        
        if (res >= INT_MAX) {
            if (sign === -1) return -INT_MAX;
            else return INT_MAX - 1;
        }
        
        i++;
    }
    
    return res * sign;
};


