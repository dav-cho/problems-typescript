/**********
** 36. Valid Sudoku (medium)
****************************************/


function isValidSudoku(board: string[][]): boolean {
    const rows = [];
    const cols = [];
    const subs = [];
    
    for (let i = 0; i < 9; ++i) {
        rows.push(new Set());
        cols.push(new Set());
        subs.push(new Set());
    }
    
    for (let row = 0; row < 9; ++row) {
        for (let col = 0; col < 9; ++col) {
            const num = board[row][col];
            
            if (num !== '.') {
                const sub = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                
                if (rows[row].has(num) || cols[col].has(num) || subs[sub].has(num)) return false;

                rows[row].add(num);
                cols[col].add(num);
                subs[sub].add(num);
            }
        }
    }
    
    return true;
};


function isValidSudoku(board: string[][]): boolean {
    const N = board.length;
    const rows = [];
    const cols = [];
    const subs = [];
    
    for (let i = 0; i < N; ++i) {
        rows.push(new Set());
        cols.push(new Set());
        subs.push(new Set());
    }
    
    for (let row = 0; row < N; ++row) {
        for (let col = 0; col < N; ++col) {
            const num = board[row][col];
            
            if (num === '.') continue;
            
            if (rows[row].has(num)) return false;
            rows[row].add(num);
            
            if (cols[col].has(num)) return false;
            cols[col].add(num);
            
            const subRow = Math.floor(row / 3) * 3;
            const subCol = Math.floor(col / 3);
            const sub = subRow + subCol;
            
            if (subs[sub].has(num)) return false;
            subs[sub].add(num);
        }
    }
    
    return true;
};


var isValidSudoku = function(board) {
    const N = board.length;
    const rows = new Array(N);
    const cols = new Array(N);
    const subs = new Array(N);
    
    for (let i = 0; i < N; ++i) {
        rows[i] = new Set();
        cols[i] = new Set();
        subs[i] = new Set();
    }
    
    for (let row = 0; row < N; ++row) {
        for (let col = 0; col < N; ++col) {
            const num = board[row][col];
            
            if (num === '.') continue;
            
            if (rows[row].has(num)) return false;
            rows[row].add(num);
            
            if (cols[col].has(num)) return false;
            cols[col].add(num);
            
            const subRow = Math.floor(row / 3) * 3;
            const subCol = Math.floor(col / 3);
            const subIdx = subRow + subCol;
            
            if (subs[subIdx].has(num)) return false;
            subs[subIdx].add(num);
        }
    }
    
    return true;
};


var isValidSudoku = function(board) {
    const N = board.length;
    const rows = new Array(N);
    const cols = new Array(N);
    const subs = new Array(N);
    
    for (let i = 0; i < N; ++i) {
        rows[i] = [];
        cols[i] = [];
        subs[i] = [];
    }
    
    for (let row = 0; row < N; ++row) {
        for (let col = 0; col < N; ++col) {
            const num = board[row][col];
            
            if (num === '.') continue;
            
            if (rows[row].includes(num)) return false;
            rows[row].push(num);
            
            if (cols[col].includes(num)) return false;
            cols[col].push(num);
            
            const subRow = Math.floor(row / 3) * 3;
            const subCol = Math.floor(col / 3);
            const subIdx = subRow + subCol;
            
            if (subs[subIdx].includes(num)) return false;
            subs[subIdx].push(num);
        }
    }
    
    return true;
};


var isValidSudoku = function(board) {
    const N = board.length;
    const rows = new Array(N).fill(null).map(() => new Set());
    const cols = new Array(N).fill(null).map(() => new Set());
    const subs = new Array(N).fill(null).map(() => new Set());
    
    for (let row = 0; row < N; ++row) {
        for (let col = 0; col < N; ++col) {
            const num = board[row][col];
            
            if (num === '.') continue;
            
            if (rows[row].includes(num)) return false;
            rows[row].push(num);
            
            if (cols[col].includes(num)) return false;
            cols[col].push(num);
            
            const subRow = Math.floor(row / 3) * 3;
            const subCol = Math.floor(col / 3);
            const subIdx = subRow + subCol;
            
            if (subs[subIdx].includes(num)) return false;
            subs[subIdx].push(num);
        }
    }
    
    return true;
};


var isValidSudoku = function(board) {
    const N = board.length;
    const rows = new Array(N).fill(null).map(() => []);
    const cols = new Array(N).fill(null).map(() => []);
    const subs = new Array(N).fill(null).map(() => []);
    
    for (let row = 0; row < N; ++row) {
        for (let col = 0; col < N; ++col) {
            const num = board[row][col];
            
            if (num === '.') continue;
            
            if (rows[row].includes(num)) return false;
            rows[row].push(num);
            
            if (cols[col].includes(num)) return false;
            cols[col].push(num);
            
            const subRow = Math.floor(row / 3) * 3;
            const subCol = Math.floor(col / 3);
            const subIdx = subRow + subCol;
            
            if (subs[subIdx].includes(num)) return false;
            subs[subIdx].push(num);
        }
    }
    
    return true;
};


