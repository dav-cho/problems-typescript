/**********
** 38. Count and Say (medium)
****************************************/


function countAndSay(n: number): string {
    let res = '1';
    
    for (let i = 0; i < n - 1; ++i) {
        let char = res[0];
        let count = 1;
        let curr = '';
        
        for (let j = 1; j < res.length; ++j) {
            if (res[j] === char) count++;
            else {
                curr += count.toString() + char;
                char = res[j];
                count = 1;
            }
        }
        
        res = curr + count.toString() + char;
    }
    
    return res;
};


