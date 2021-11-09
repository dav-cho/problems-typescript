/**********
** 48. Rotate Image (medium)
****************************************/


/**
 Do not return anything, modify matrix in-place instead.
 */


// reverse + swap
function rotate(matrix: number[][]): void {
    const len = matrix.length;
    matrix.reverse();

    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < i; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};


function rotate(matrix: number[][]): void {
    const N = matrix.length;

    matrix.reverse();

    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < i; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};


// reverse diagonal, then reverse left to right
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const len = matrix.length;
    
    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < i; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (const row of matrix) {
        for (let j = 0; j < len / 2; ++j) {
            [row[j], row[~j + len]] = [row[~j + len], row[j]];
        }
    }
};


function rotate(matrix: number[][]): void {
    const len = matrix.length;

    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < i; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < len / 2; ++j) {
            [matrix[i][j], matrix[i][~j + len]] = [matrix[i][~j + len], matrix[i][j]];
        }
    }
};


function rotate(matrix: number[][]): void {
    const N = matrix.length;

    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < i; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N / 2; ++j) {
            [matrix[i][j], matrix[i][~j + N]] = [matrix[i][~j + N], matrix[i][j]];
        }
    }
};


