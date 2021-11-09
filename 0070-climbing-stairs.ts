/**********
** 70. Climbing Stairs (easy)
****************************************/

/**
* dynamic programming
**/
function climbStairs(n: number): number {
    const memo = new Array(n + 1).fill(null);
    
    memo[1] = 1;
    memo[2] = 2;
    
    for (let i = 3; i < n + 1; ++i) {
        memo[i] = memo[i - 2] + memo[i - 1];
    }
    
    return memo[n];
};


function climbStairs(n: number): number {
    const memo = new Array(n).fill(null);
    
    memo[0] = 1;
    memo[1] = 2;
    
    for (let i = 2; i < n; ++i) {
        memo[i] = memo[i - 2] + memo[i - 1];
    }
    
    return memo[n - 1];
};


function climbStairs(n: number): number {
    const cache = new Array(n).fill(0);
    
    cache[1] = 1;
    cache[2] = 2;
    
    for (let i = 3; i <= n; ++i) {
        cache[i] = cache[i - 2] + cache[i - 1];
    }
    
    return cache[n];
};


function climbStairs(n: number): number {
    const cache = new Array(n).fill(0);
    
    cache[1] = 1;
    cache[2] = 2;
    
    for (let i = 3; i < n + 1; ++i) {
        cache[i] = cache[i - 2] + cache[i - 1];
    }
    
    return cache[n];
};


function climbStairs(n: number): number {
    const cache = new Array(n).fill(0);
    
    for (let i = 0; i < 3; ++i) cache[i] = i;
    
    for (let i = 3; i < n + 1; ++i) {
        cache[i] = cache[i - 2] + cache[i - 1];
    }
    
    return cache[n];
};


/**
* recursive with memoization
**/
function climbStairs(n: number): number {
    const memo = new Array(n).fill(null);
    
    const recursiveHelper = i => {
        if (memo[i]) return memo[i];
        if (i > n) return 0;
        if (i === n) return 1;
        
        memo[i] = recursiveHelper(i + 1) + recursiveHelper(i + 2);
        
        return memo[i];
    }
    
    return recursiveHelper(0);
};


/**
* fibonacci number
**/
function climbStairs(n: number): number {
    if (n === 1) return 1;
    
    let a = 1;
    let b = 2;
    
    for (let i = 2; i < n; ++i) {
        const c = a + b;
        
        [a, b] = [b, c];
    }
    
    return b;
};


function climbStairs(n: number): number {
    if (n === 1) return 1;
    
    let a = 1, b = 2;
    
    for (let i = 3; i <= n; ++i) {
        let c = a + b;
        
        a = b, b = c;
    }
    
    return b;
};


function climbStairs(n: number): number {
    if (n === 1) return 1;
    
    let a = 1;
    let b = 2;

    for (let i = 3; i <= n; ++i) {
        let c = a + b;
        
        a = b;
        b = c;
    }
    
    return b;
};


function climbStairs(n: number): number {
    if (n === 1) return 1;
    
    let a = 1;
    let b = 2;

    for (let i = 3; i <= n; ++i) {
        let c = a + b;
        
        [a, b] = [b, c];
    }
    
    return b;
};


/**
* binets method
**/



/**
* fibonacci formula
**/



/**
* recursive (TLE)
**/
function climbStairs(n: number): number {
    const recursiveHelper = i => {
        if (i > n) return 0;
        if (i == n) return 1;
        
        return recursiveHelper(i + 1) + recursiveHelper(i + 2);
    }
    
    return recursiveHelper(0);
};


function climbStairs(n: number): number {
    const recursiveHelper = (i, n) => {
        if (i > n) return 0;
        if (i === n) return 1;
        
        return recursiveHelper(i + 1, n) + recursiveHelper(i + 2, n);
    }
    
    return recursiveHelper(0, n);
};


