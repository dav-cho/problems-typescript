/**********
** 20. Valid Parentheses (easy)
****************************************/

/**
* stack
**/
function isValid(s: string): boolean {
    const table = { ')': '(', ']': '[', '}': '{' }
    const stack = [];
    
    for (const char of s) {
        if (char in table) {
            if (stack.length && stack[stack.length - 1] === table[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return !stack.length;
};


