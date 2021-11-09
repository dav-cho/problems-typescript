/**********
** 66. Plus One (easy)
****************************************/


 function plusOne(digits: number[]): number[] {
    let carry = 0;
    
    digits[digits.length - 1]++;
    
    for (let i = digits.length - 1; i >= 0; --i) {
        const digit = (digits[i] + carry) % 10;
        
        carry = Math.floor((digits[i] + carry) / 10);
        digits[i] = digit;
    }
    
    return carry ? [carry, ...digits] : digits;
};


var plusOne = function(digits) {
    const divmod = num => [Math.floor(num / 10), num % 10];
    let remainder = 0;
    
    digits[digits.length - 1] += 1;
    
    for (let i = digits.length - 1; i >= 0; --i) {
        const [mod, newDigit] = divmod(digits[i] + remainder);
        
        digits[i] = newDigit;
        remainder = mod;
    }
    
    if (remainder) digits.unshift(remainder);
    
    return digits;
};


// attempt
function plusOne(digits: number[]): number[] {
    let strNum = '';
    
    digits.forEach(digit => strNum += digit.toString());
    
    console.log('~ before:', strNum);
    strNum = (Number(strNum) + 1).toString();
    console.log('~ after:', strNum);
    
    let res = [];
    
    for (const char of strNum) res.push(parseInt(char));
    
    return res;
};

/**
** Tests
****/

const test1 = [[1,2,3], [1,2,4]];
const test2 = [[4,3,2,1], [4,3,2,2]];
const test3 = [[0], [1]];


const testCases = [test1, test2, test3];

test(testCases, plusOne);


function test (testCases, func) {
  let allPassed = true;

  for (const [test, res] of testCases) {
    if (func(test) != res) {
      allPassed = false;

      console.log('\nTest Failed');
      console.log(`${test} !== ${res}`);
    }
  }

  if (allPassed) {
    console.log('\nAll Tests Passed');
  }

  console.log('\nFINISHED');
};

