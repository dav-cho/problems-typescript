/**********
** Valid Palindrome (easy)
****************************************/


// two-pointer
function isPalindrome(s: string): boolean {
    const alNum = char => {
        const checkLowers = char >= 'a' && char <= 'z';
        const checkUppers = char >= 'A' && char <= 'Z';
        const checkDigits = char >= '0' && char <= '9';
        
        return checkLowers || checkUppers || checkDigits;
    }
    
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        while (left < right && !alNum(s[left])) left++;
        while (left < right && !alNum(s[right])) right--;
        
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
    }
    
    return true;
};


function isPalindrome(s: string): boolean {
    const arr = [...s.toLowerCase()].filter(char => {
        const checkLowers = char >= 'a' && char <= 'z';
        const checkUppers = char >= 'A' && char <= 'Z';
        const checkDigits = char >= '0' && char <= '9';
        
        return checkLowers || checkUppers || checkDigits;
    });
    
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] != arr[~i + arr.length]) return false;
    }
    
    return true;
};


function isPalindrome(s: string): boolean {
    const isAlnum = char => {
        const checkLowers = char >= 'a' && char <= 'z';
        const checkUppers = char >= 'A' && char <= 'Z';
        const checkNums = char >= '0' && char <= '9';
        
        
        return checkLowers || checkUppers || checkNums;
    }
    
    const str = Array.from(s).filter(isAlnum);
    const reversed = [...str].reverse();
    
    for (let i = 0; i < str.length; ++i) {
        if (str[i].toLowerCase() !== reversed[i].toLowerCase()) {
            return false;
        }
    }
    
    return true;
};


function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    
    const isAlnum = char => {
        const checkLowers = char >= 'a' && char <= 'z';
        const checkUppers = char >= 'A' && char <= 'Z';
        const checkNums = char >= '0' && char <= '9';
        
        
        return checkLowers || checkUppers || checkNums;
    }
    
    while (left < right) {
        while (left < right && !isAlnum(s[left])) left++;
        while (left < right && !isAlnum(s[right])) right--;
        
        if (s[left].toLowerCase() !== s[right].toLowerCase()){
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
};


function isPalindrome(s: string): boolean {
    const isAlnum = char => {
        const checkLowers = char >= 'a' && char <= 'z';
        const checkUppers = char >= 'A' && char <= 'Z';
        const checkNums = char >= '0' && char <= '9';
        
        
        return checkLowers || checkUppers || checkNums;
    }
    
    const str = Array.from(s).filter(isAlnum)
    const len  = str.length;
    
    for (let i = 0; i < len; ++i) {
        if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
            return false;
        }
    }
    
    return true;
};


// compare reverse
function isPalindrome(s: string): boolean {
    const arr = Array.from(s.toLowerCase()).filter(char => {
        const checkLowers = char >= 'a' && char <= 'z';
        const checkUppers = char >= 'A' && char <= 'Z';
        const checkDigits = char >= '0' && char <= '9';
        
        return checkLowers || checkUppers || checkDigits;
    })
    
    const reverse = [];
    
    for (let i = arr.length - 1; i >= 0; --i) {
        reverse.push(arr[i]);
    }
    
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== reverse[i]) return false;
    }
    
    return true;
};


