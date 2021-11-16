/**********
** 412. Fizz Buzz (easy)
****************************************/

/**
* hash table
**/
function fizzBuzz(n: number): string[] {
    const hashTable = { 3: 'Fizz', 5: 'Buzz' };
    const res = [];
    
    for (let i = 1; i <= n; ++i) {
        let curr = '';
        
        for (const num in hashTable) {
            if (i % +num === 0) curr += hashTable[num];
        }
        
        if (!curr) curr = i.toString();

        res.push(curr);
    }
    
    return res;
};


