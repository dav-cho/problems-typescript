/**********
** 121. Best Time to Buy and Sell Stock (easy)
**************************************************/


function maxProfit(prices: number[]): number {
    let res = 0;
    let valley = 0;
    let peak = 0;
    let i = 1;
    
    while (i < prices.length) {
        while (prices[i] < prices[i - 1]) i++;
        
        valley = i;
        
        while (prices[i] > prices[i - 1]) i++;
        
        peak = i;
        
        res += peak - valley;
    }
    
    return res;
};


/**
** Tests
****/

const test1 = [[7,1,5,3,6,4] 5];
const test2 = [[7,6,4,3,1], 0];
const testCases = [test1, test2];

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

