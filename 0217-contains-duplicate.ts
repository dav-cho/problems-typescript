/**********
** 217. Contains Duplicate (easy)
****************************************/


// hash table
function containsDuplicate(nums: number[]): boolean {
    const seen = new Set();
    
    for (let i = 0; i < nums.length; ++i) {
        if (seen.has(nums[i])) return true;
        
        seen.add(nums[i]);
    }
    
    return false;
};


// sorting
function containsDuplicate(nums: number[]): boolean {
    nums.sort();
    
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] === nums[i - 1]) return true;
    }
    
    return false;
};


/**
** Tests
****/

const test1 = [[1,2,3,1], true];
const test2 = [[1,2,3,4], false];
const test3 = [[1,1,1,3,3,4,3,2,4,2] , true];
const testCases = [test1, test2, test3];

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

