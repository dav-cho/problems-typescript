/**********
** 136. Single Number (easy)
****************************************/


// bit manipulation
function singleNumber(nums: number[]): number {
    return nums.reduce((xor, num) => xor ^ num);
};


function singleNumber(nums: number[]): number {
    let xor = 0;
    
    for (const num of nums) {
        xor ^= num;
    }
    
    return xor;
};


// hash table
function singleNumber(nums: number[]): number {
    const counts = {};
    
    for (const num of nums) {
        num in counts ? counts[num]++ : counts[num] = 1;
    }
    
    for (const char in counts) {
        if (counts[char] === 1) return Number(char);
    }
};


function singleNumber(nums: number[]): number {
    const counts = {};
    
    for (const num of nums) {
        if (num in counts) counts[num]++;
        else counts[num] = 1;
    }
    
    for (const char in counts) {
        if (counts[char] === 1) return Number(char);
    }
};


function singleNumber(nums: number[]): number {
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) seen.delete(num);
        else seen.add(num);
    }
    
    return seen[0];
};


// math
function singleNumber(nums: number[]): number {
    const setSum = [...new Set(nums)].reduce((sum, elem) => sum + elem);
    const numSum = nums.reduce((sum, elem) => sum + elem);
          
    return setSum * 2 - numSum;
};


function singleNumber(nums: number[]): number {
    const setSum = Array.from(new Set(nums)).reduce((sum, num) => sum + num);
    const numSum = nums.reduce((sum, num) => sum + num);
    
    return setSum * 2 - numSum;
};


/**
** Tests
****/

const testCases = [];

test();


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

