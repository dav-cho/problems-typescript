/**********
** 73. Set Matrix Zeroes (medium)
****************************************/

/**
* no extra space
**/
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let firstColZero = false;
    
    for (let row = 0; row < matrix.length; ++row) {
        if (matrix[row][0] === 0) {
            firstColZero = true;
        }
        
        for (let col = 1; col < matrix[0].length; ++col) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }

    for (let row = 1; row < matrix.length; ++row) {
        for (let col = 1; col < matrix[0].length; ++col) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let col = 0; col < matrix[0].length; ++col) {
            matrix[0][col] = 0;
        }
    }

    if (firstColZero) {
        for (let row = 0; row < matrix.length; ++row) {
            matrix[row][0] = 0;
        }
    }
};


/**
* using a hash table
**/
function setZeroes(matrix: number[][]): void {
    const rows = new Set();
    const cols = new Set();

    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[0].length; ++col) {
            if (matrix[row][col] === 0) {
                rows.add(row);
                cols.add(col);
            }
        }
    }

    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[0].length; ++col) {
            if (rows.has(row) || cols.has(col)) {
                matrix[row][col] = 0;
            }
        }
    }
};


