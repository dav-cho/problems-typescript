/**********
** 118. Pascal's Triangle (easy)
****************************************/

/**
* dynamic programming
**/
function generate(numRows: number): number[][] {
    const res = [];
    
    for (let row = 0; row < numRows; ++row) {
        const curr = new Array(row + 1);
        
        curr[0] = 1;
        curr[curr.length - 1] = 1;
        
        for (let i = 1; i < curr.length - 1; ++i) {
            const prevRow = res[row - 1];
            
            curr[i] = prevRow[i - 1] + prevRow[i];
        }
        
        res.push(curr);
    }
    
    return res;
};


function generate(numRows: number): number[][] {
    const res = [];
    
    for (let row = 0; row < numRows; ++row) {
        const curr = new Array(row + 1);
        
        curr[0] = 1;
        curr[row] = 1;
        
        for (let i = 1; i < row; ++i) {
            const prevRow = res[row - 1];
            
            curr[i] = prevRow[i - 1] + prevRow[i];
        }
        
        res.push(curr);
    }
    
    return res;
};


function generate(numRows: number): number[][] {
    const res = [];
    
    for (let row = 0; row < numRows; ++row) {
        const curr = new Array(row + 1);
        
        curr[0] = 1;
        curr[curr.length - 1] = 1;
        
        for (let i = 1; i < curr.length - 1; ++i) {
            curr[i] = res[row - 1][i - 1] + res[row - 1][i];
        }
        
        res.push(curr);
    }
    
    return res;
};


/**
* offset sum of previous row
**/
function generate(numRows: number): number[][] {
    const res = [[1]];
    
    for (let row = 1; row < numRows; ++row) {
        const prevRow = res[res.length - 1];
        const a = [0, ...prevRow];
        const b = [...prevRow, 0];
        const curr = [];
        
        for (let i = 0; i < a.length; ++i) {
            curr.push(a[i] + b[i]);
        }
        
        res.push(curr);
    }
    
    return res;
};


