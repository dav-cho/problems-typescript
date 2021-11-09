/**********
** 122. Best Time to Buy and Sell Stock II (medium)
*******************************************************/


// one-pass
function maxProfit(prices: number[]): number {
    let res = 0;
    
    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] > prices[i - 1]) {
            res += prices[i] - prices[i - 1];
        }
    }
    
    return res;
};


// peak valley
function maxProfit(prices: number[]): number {
    let res = 0;
    let i = 0;
    
    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i] >= prices[i + 1]) i++;
        
        const valley = prices[i];
        
        while (i < prices.length - 1 && prices[i] <= prices[i + 1]) i++;
        
        const peak = prices[i];
        
        res += peak - valley;
    }
    
    return res;
};


/**
** Tests
****/

const test1 = [[7,1,5,3,6,4], 7];
const test2 = [[1,2,3,4,5], 4];
const test3 = [[7,6,4,3,1], 0];
const testCases = [test2, test2, test3];

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

