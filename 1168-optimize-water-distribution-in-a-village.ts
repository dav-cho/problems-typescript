/**********
** 1168. Optimize Water Distribution in a Village (hard)
************************************************************/

/**
* prim's algorithm w/ heap
**/



/**
* kruskal's algorithm w/ union find
**/
function minCostToSupplyWater(n: number, wells: number[], pipes: number[][]): number {
    const uf = new UnionFind(n);
    const edges = [];
    let totalCost = 0;
    
    wells.forEach((cost, i) => {
        edges.push([cost, 0, i + 1]);
    });
    
    pipes.forEach(([houseA, houseB, cost], i) => {
        edges.push([cost, houseA, houseB]);
    });
    
    edges.sort((a, b) => a[0] - b[0]);
    
    for (const [cost, houseA, houseB] of edges) {
        if (uf.union(houseA, houseB)) {
            totalCost += cost;
        }
    }
    
    return totalCost;
};


class UnionFind {
    root: number[];
    rank: number[];

    constructor(size) {
        this.root = [...new Array(size + 1).keys()];
        this.rank = new Array(size + 1).fill(1);
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
        
        if (rootX == rootY) return false;
        
        if (this.rank[rootX] < this.rank[rootY]) {
            this.root[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.root[rootY] = rootX;
        } else {
            this.root[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        return true;
    }
}


