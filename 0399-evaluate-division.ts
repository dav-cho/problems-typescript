/**********
** 399. Evaluate Division (medium)
****************************************/

/**
* path search in graph (backtracking w/ dfs)
**/



/**
* union find - disjoint set
**/
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const weights = {};
    const res = [];
    
    const find = node => {
        if (!(node in weights)) {
            weights[node] = [node, 1];
        };
        
        const [group, weight] = weights[node];
        
        if (node !== group) {
            const [newGroup, groupWeight] = find(group);
            
            weights[node] = [newGroup, weight * groupWeight];
        };
        
        return weights[node];
    };
    
    const union = (dividend, divisor, val) => {
        const [num, numWeight] = find(dividend);
        const [denom, denomWeight] = find(divisor);
        
        if (num !== denom) {
            weights[num] = [denom, denomWeight * val / numWeight];
        }
    }
    
    equations.forEach(([dividend, divisor], i) => {
        union(dividend, divisor, values[i]);
    })
    
    for (const [dividend, divisor] of queries) {
        if (!(dividend in weights) || !(divisor in weights)) {
            res.push(-1);
        } else {
            const [num, numWeight] = find(dividend);
            const [denom, denomWeight] = find(divisor);
            
            if (num !== denom) res.push(-1);
            else res.push(numWeight / denomWeight);
        }
    }
    
    return res;
};


/**
* wip - backtracking w/ dfs
**/
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: any = {};
    const res = [];
    
    const backtrack = (curr, target, products, seen) => {
        const neighbors = graph[curr];
        let ans = -1;
        
        seen.add(curr);
        
        if (target in neighbors) {
            ans = products * neighbors[target];
        } else {
            for (const [neighbor, val] of Object.entries(neighbors)) {
                if (seen.has(neighbor)) continue;
                
                ans = backtrack(neighbor, target, products * val, seen);
                
                if (ans !== -1) break;
            }
        };
        
        seen.delete(curr);
        return ans;
    }
    
    equations.forEach(([dividend, divisor], i) => {
        const val = values[i];
        
        dividend in graph ? graph.dividend.divisor = val : graph.dividend = { divisor: val };
        divisor in graph ? graph.divisor.dividend = 1 / val : graph.divisor = { dividend: 1 / val };
    });
    
    for (const [dividend, divisor] of queries) {
        if (!(dividend in graph) || !(divisor in graph)) {
            res.push(-1);
        } else if (dividend === divisor) {
            res.push(1);
        } else {
            res.push(backtrack(dividend, divisor, 1, new Set()));
        }
    };
    
    return res;
};


