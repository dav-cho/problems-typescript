/**********
** 88. Merge Sorted Array (easy)
****************************************/

/**
 Do not return anything, modify nums1 in-place instead.
 */


// sorting
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = m, j = 0; i < m + n && j < n; ++i, ++j) {
        nums1[i] = nums2[j];
    }
    
    nums1.sort((a, b) => a - b);
};


// three-pointer from beginning
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const copy = nums1.slice();

    for (let i = 0, j = 0, k = 0; k < m + n; ++k) {
        if (j >= n || (i < m && copy[i] < nums2[j])) {
            nums1[k] = copy[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }
    }
};


// three-pointer from end
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
        else nums1[k--] = nums2[j--];
    }

    while (j >= 0) nums1[k--] = nums2[j--];
};


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    
    for (let k = n + m - 1; k >= 0; --k) {
        if (j < 0) break;
        
        if (nums1[i] > nums2[j]) nums1[k] = nums1[i--];
        else nums1[k] = nums2[j--];
    }
};


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    
    for (let k = m + n - 1; k >= 0; --k) {
        if (j < 0 || nums1[i] > nums2[j]) nums1[k] = nums1[i--];
        else nums1[k] = nums2[j--];
    }
};


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let [i, j] = [m - 1, n - 1];

    for (let k = m + n - 1; k >= 0; --k) {
        if (j < 0) break;
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
    }
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

