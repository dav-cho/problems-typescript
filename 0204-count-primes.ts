/**********
** 204. Count Primes (medium)
****************************************/

/**
* sieve method (math)
**/
function countPrimes(n: number): number {
    if (n < 3) return 0;
    
    const vals = new Array(n).fill(1);
    
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); ++i) {
        if (vals[i]) {
            for (let mult = i * i; mult < n; mult += i) {
                vals[mult] = 0;
            }
        }
    }
    
    return vals.reduce((sum, x) => sum + x) - 2;
};


function countPrimes(n: number): number {
    if (n < 3) return 0;
    
    const vals = new Array(n).fill(1);
    
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); ++i) {
        if (vals[i]) {
            for (let mult = i * i; mult < n; mult += i) {
                vals[mult] = 0;
            }
        }
    }
    
    return vals.filter(x => x).length - 2;
};


function countPrimes(n: number): number {
    if (n < 3) return 0;

    const nums = new Array(n).fill(1);

    for (let i = 2; i <= Math.floor(Math.sqrt(n)); ++i) {
        if (nums[i]) {
            for (let multiple = i * i; multiple < n; multiple += i) {
                nums[multiple] = 0;
            };
        };
    };
    
    return nums.reduce((a,b) => a + b) - 2;
};


/**
* wip
**/
function countPrimes(n: number): number {
    if (n < 3) return 0;
    
    const nums = new Set();
    
    for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; ++i) {
        if (!nums.has(i)) {
            for (let multiple = i * i; multiple < n; multiple += i) {
                nums.add(multiple);
            }
        }
    }
    
    return n - 2 - nums.size;
};



