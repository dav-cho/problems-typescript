/**********
** 350. Intersection of Two Arrays II (easy)
************************************************/


// hash map
function intersect(nums1: number[], nums2: number[]): number[] {
    const seen = {};
    
    for (const num of nums1) num in seen ? seen[num]++ : seen[num] = 1;
    
    let k = 0;
    
    for (const num of nums2) {
        if (seen[num] > 0) {
            nums1[k++] = num;
            seen[num]--;
        }
    }
    
    return nums1.slice(0, k);
};


// sorting
function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let [i, j, k] = [0, 0, 0];
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) ++i;
        else if (nums1[i] > nums2[j]) ++j;
        else {
            nums1[k++] = nums1[i++];
            ++j;
        }
    }
    
    return nums1.slice(0, k);
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

