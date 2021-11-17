/**********
** 1631. Path With Minimum Effort (medium)
**********************************************/

/**
* dijkstra's
**/
function minimumEffortPath(heights: number[][]): number {
    const rows = heights.length;
    const cols = heights[0].length;
    const diffs = new Array(rows);
    const seen = new Array(rows);
    const pq = new PriorityQueue([0, 0, 0]);
    
    for (let i = 0; i < rows; ++i) {
        diffs[i] = new Array(cols).fill(Infinity);
        seen[i] = new Array(cols).fill(false);
    }
    
    diffs[0][0] = 0;
    
    while (pq.queue.length) {
        const [diff, row, col] = pq.pop();
        const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        seen[row][col] = true;
        
        for (const [y, x] of dirs) {
            const r = row + y;
            const c = col + x;
            
            if (r < 0 || r >= rows || c < 0 || c >= cols || seen[r][c]) {
                continue;
            }
            
            const currDiff = Math.abs(heights[row][col] - heights[r][c]);
            const maxDiff = Math.max(currDiff, diffs[row][col]);
            
            if (diffs[r][c] > maxDiff) {
                diffs[r][c] = maxDiff;
                pq.push([maxDiff, r, c]);
            }
        }
    }
    
    return diffs[rows - 1][cols - 1];
};


class PriorityQueue {
    queue: number[][];

    constructor(initialVal = null) {
        this.queue = initialVal ? [initialVal] : [];
    }

    push(val) {
        let i = 0;
        
        while (i < this.queue.length && val[0] < this.queue[i][0]) {
            i++;
        }
        
        this.queue.splice(i, 0, val);
    }

    pop() {
        return this.queue.pop();
    }
}


/**
* union find - disjoint set
**/
function minimumEffortPath(heights: number[][]): number {
    const rows = heights.length;
    const cols = heights[0].length;
    const edges = [];
    const uf = new UnionFind(rows * cols);
    
    if (rows === 1 && cols === 1) return 0;
    
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (row > 0) {
                const diff = Math.abs(heights[row][col] - heights[row - 1][col]);
                
                edges.push([diff, row * cols + col, (row - 1) * cols + col]);
            }
            
            if (col > 0) {
                const diff = Math.abs(heights[row][col] - heights[row][col - 1]);
                
                edges.push([diff, row * cols + col, row * cols + col - 1]);
            }
        }
    }
    
    edges.sort((a, b) => a[0] - b[0]);
    
    for (const [diff, y, x] of edges) {
        uf.union(x, y);
        
        if (uf.find(0) === uf.find(rows * cols - 1)) {
            return diff;
        }
    }
    
    return -1;
};


class UnionFind {
    root: number[];
    rank: number[];

    constructor(size) {
        this.root = [...new Array(size).keys()];
        this.rank = new Array(size).fill(1);
    }
    
    find(x) {
        if (x !== this.root[x]) {
            this.root[x] = this.find(this.root[x]);
        }
        
        return this.root[x];
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return;
        
        if (this.rank[rootX] < this.rank[rootY]) {
            this.root[rootX] = rootY;
        } else {
            this.root[rootY] = rootX;
            
            if (this.rank[rootX] === this.rank[rootY]) {
                this.rank[rootX]++;
            }
        }
    }
}


function minimumEffortPath(heights: number[][]): number {
    const rows = heights.length;
    const cols = heights[0].length;
    const edges = [];
    const uf = new UnionFind(rows * cols);
    
    if (rows === 1 && cols === 1) return 0;
    
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (row > 0) {
                const diff = Math.abs(heights[row][col] - heights[row - 1][col]);
                
                edges.push([diff, row * cols + col, (row - 1) * cols + col]);
            }
            
            if (col > 0) {
                const diff = Math.abs(heights[row][col] - heights[row][col - 1]);
                
                edges.push([diff, row * cols + col, row * cols + col - 1]);
            }
        }
    }
    
    edges.sort((a, b) => a[0] - b[0]);
    
    for (const [diff, y, x] of edges) {
        uf.union(x, y);
        
        if (uf.find(0) === uf.find(rows * cols - 1)) {
            return diff;
        }
    }
    
    return -1;
};


class UnionFind {
    root: number[];
    rank: number[];

    constructor(size) {
        this.root = [...new Array(size).keys()];
        this.rank = new Array(size).fill(1);
    }

    find(x) {
        if (x !== this.root[x]) {
            this.root[x] = this.find(this.root[x]);
        }
        
        return this.root[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return;
        
        if (this.rank[rootX] < this.rank[rootY]) {
            this.root[rootX] = rootY;
        } else {
            this.root[rootY] = rootX;
            
            if (this.rank[rootX] === this.rank[rootY]) {
                this.rank[rootX]++;
            }
        }
    }
}


/**
* bfs binary search
**/
function minimumEffortPath(heights: number[][]): number {
    const rows = heights.length;
    const cols = heights[0].length;
    
    const canReach = mid => {
        const seen = new Array(rows);
        const queue = [[0, 0]]
        
        for (let i = 0; i < rows; ++i) {
            seen[i] = new Array(cols).fill(false);
        };
        
        while (queue.length) {
            const [row, col] = queue.shift();
            
            if (row === rows - 1 && col === cols - 1) return true;
            
            seen[row][col] = true;
            
            for (const [y, x] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                const r = row + y;
                const c = col + x;
                
                if (r < 0 || r >= rows || c < 0 || c >= cols || seen[r][c]) {
                    continue
                };
                
                const diff = Math.abs(heights[row][col] - heights[r][c]);
                
                if (diff <= mid) {
                    queue.push([r, c]);
                    seen[r][c] = true;
                }
            }
        }
        
        return false;
    }
    
    let left = 0;
    let right = 10 ** 6;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (canReach(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};


/**
* dfs binary search
**/
function minimumEffortPath(heights: number[][]): number {
    const rows = heights.length;
    const cols = heights[0].length;
    
    const canReach = (row, col, mid, seen) => {
        if (row === rows - 1 && col === cols - 1) return true;
        
        seen[row][col] = true;
        
        for (const [y, x] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            const r = row + y;
            const c = col + x;
            
            if (r < 0 || r >= rows || c < 0 || c >= cols || seen[r][c]) {
                continue;
            };
            
            const diff = Math.abs(heights[row][col] - heights[r][c]);
            
            if (diff <= mid) {
                seen[r][c] = true;
                
                if (canReach(r, c, mid, seen)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    let left = 0;
    let right = 10 ** 6;
    
    while (left < right) {
        const seen = new Array(rows);
        const mid = Math.floor((left + right) / 2);
        
        for (let i = 0; i < rows; ++i) {
            seen[i] = new Array(cols).fill(false);
        }
        
        if (canReach(0, 0, mid, seen)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};


/**
* wip
**/
function minimumEffortPath(heights: number[][]): number {
    const rows = heights.length;
    const cols = heights[0].length;
    const diffs = new Array(rows);
    const seen = new Array(rows);
    const pq = new PriorityQueue([0, 0, 0]);
    
    for (let i = 0; i < rows; ++i) {
        diffs[i] = new Array(cols).fill(Infinity);
        seen[i] = new Array(cols).fill(false);
    }
    
    diffs[0][0] = 0;
    
    while (pq.queue.length) {
        const [diff, row, col] = pq.pop();
        const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        seen[row][col] = true;
        
        for (const [y, x] of dirs) {
            const r = row + y;
            const c = col + x;
            
            if (r < 0 || r >= rows || c < 0 || c >= cols || seen[r][c]) {
                continue;
            }
            
            const currDiff = Math.abs(heights[row][col] - heights[r][c]);
            const maxDiff = Math.max(currDiff, diffs[row][col]);
            
            if (diffs[r][c] > maxDiff) {
                diffs[r][c] = maxDiff;
                pq.push([maxDiff, r, c]);
            }
        }
    }
    
    return diffs[rows - 1][cols - 1];
};


class PriorityQueue {
    queue: number[][];

    constructor(initialVal = null) {
        this.queue = initialVal ? [initialVal] : [];
    }

    push(val) {
        let i = 0;
        
        while (i < this.queue.length && val[0] < this.queue[i][0]) {
            i++;
        }
        
        this.queue.splice(i, 0, val);
    }

    pop() {
        return this.queue.pop();
    }
}
