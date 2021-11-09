/**********
** 189. Rotate Array (medium)
****************************************/


// extra array
function rotate(nums: number[], k: number): void {
    const len = nums.length;
    const temp = new Array(len);

    for (let i = 0; i < len; ++i) {
        temp[(i + k) % len] = nums[i];
    }

    for (let i = 0; i < len; ++i) {
        nums[i] = temp[i];
    }
};


// cyclic replacements
function rotate(nums: number[], k: number): void {
    const len = nums.length;
    let start = 0;
    let count = len;
    
    while (count) {
        let [prev, curr] = [nums[start], start];
        
        while (true) {
            let nextIdx = (curr + k) % len;
            
            [prev, nums[nextIdx]] = [nums[nextIdx], prev];
            curr = nextIdx;
            count--;
            
            if (curr === start) break;
        }
        
        start++;
    }
};


function rotate(nums: number[], k: number): void {
    const len = nums.length;
    let start = 0;
    let count = len;
    
    while (count) {
        let curr = start;
        let prev = nums[start];
        
        while (true) {
            const idx = (curr + k) % len;
            
            [prev, nums[idx]] = [nums[idx], prev];
            curr = idx;
            count--;
            
            if (curr === start) break;
        }
        
        start++;
    }
};


function rotate(nums: number[], k: number): void {
    const len = nums.length;
    let start = 0;
    let count = len;
    
    while (count) {
        let curr = start;
        let prev = nums[start];
        
        while (true) {
            const idx = (curr + k) % len;
            const temp = nums[idx];
            
            nums[idx] = prev;
            prev = temp;
            curr = idx;
            count--;
            
            if (curr === start) break;
        }
        
        start++;
    }
};


function rotate(nums: number[], k: number): void {
    const len = nums.length;
    k %= len;
    
    let start = 0;
    let count = 0;
    
    while (count < len) {
        let [curr, prev] = [start, nums[start]];
        
        while (true) {
            const nextIdx = (curr + k) % len;
            
            [nums[nextIdx], prev] = [prev, nums[nextIdx]]
            curr = nextIdx;
            count++;
            
            if (start === curr) break;
        }
        
        start++;
    }
};


function rotate(nums: number[], k: number): void {
    let length: number = nums.length;
    let startIdx: number = 0;
    let count: number = 0;
    
    k %= length;
    
    while (count < length) {
        let currIdx: number = startIdx;
        let prevNum: number = nums[startIdx];
        
        while (true) {
            const nextIdx: number = (currIdx + k) % length;
            
            [nums[nextIdx], prevNum] = [prevNum, nums[nextIdx]];
            count++;
            currIdx = nextIdx
            
            if (currIdx === startIdx) break;
        }
        
        startIdx++;
    }
};


var rotate = function(nums, k) {
  let length = nums.length;
  let startIdx = 0;
  let count = 0;

  k %= length;

  while (count < length) {
    let currIdx = startIdx;
    let prevNum = nums[startIdx];

    while (true) {
      const nextIdx = (currIdx + k) % length;

      [nums[nextIdx], prevNum] = [prevNum, nums[nextIdx]];
      currIdx = nextIdx;
      count++;

      if (currIdx === startIdx) break;
    }

    startIdx++;
  }
};


// reverse
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k %= nums.length;
    nums.reverse();

    let left = 0;
    let right = k - 1;

    while (left < right) {
        [nums[left++], nums[right--]] = [nums[right], nums[left]];
    }

    left = k;
    right = nums.length - 1;

    while (left < right) {
        [nums[left++], nums[right--]] = [nums[right], nums[left]];
    }
};


