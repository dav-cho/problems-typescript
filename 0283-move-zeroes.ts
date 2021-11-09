/**********
** 283. Move Zeroes (easy)
****************************************/

/**
 Do not return anything, modify nums in-place instead.
 */


// swapping
function moveZeroes(nums: number[]): void {
    let k = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            [nums[i], nums[k++]] = [nums[k], nums[i]];
        }
    }
};


function moveZeroes(nums: number[]): void {
    let k = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            [nums[i], nums[k]] = [nums[k], nums[i]];
            k++;
        }
    }
};



// move to front then replace end with zeroes
function moveZeroes(nums: number[]): void {
    let k = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) nums[k++] = nums[i];
    }

    while (k < nums.length) {
        nums[k++] = 0;
    }
};


function moveZeroes(nums: number[]): void {
    let k: number = 0;

    for (let i: number = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    }

    while (k < nums.length) {
        nums[k] = 0;
        k++;
    }
};


function moveZeroes(nums: number[]): void {
    let k: number = 0;

    for (let i: number = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            nums[k++] = nums[i];
        }
    }

    while (k < nums.length) {
        nums[k++] = 0;
    }
};


/**
** Tests
****/

const test1 = [[0,1,0,3,12], [1,3,12,0,0]];
const test2 = [[0], [0]];

const testCases = [test1, test2];

test(testCases);


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

