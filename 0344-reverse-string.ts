/**********
** 344. Reverse String (easy)
****************************************/

/**
 Do not return anything, modify s in-place instead.
*/


// swap
function reverseString(s: string[]): void {
    const len = s.length;

    for (let i = 0; i < len / 2; ++i) {
        [s[i], s[~i + len]] = [s[~i + len], s[i]];
    }
};


function reverseString(s: string[]): void {
    for (let i = 0; i < Math.floor(s.length / 2); ++i) {
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
    }
};


// recursive
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const helper = (left, right) => {
        if (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            
            return helper(left + 1, right - 1);
        }
    }

    return helper(0, s.length - 1);
};


