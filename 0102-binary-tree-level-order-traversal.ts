/**********
** 102. Binary Tree Level Order Traversal
*********************************************/

/**
* recursive
**/
function levelOrder(root: TreeNode | null): number[][] {
    const res = [];
    
    const helper = (node, level) => {
        if (!node) return res;
        if (res.length === level) res.push([]);
        
        res[level].push(node.val);
        helper(node.left, level + 1);
        helper(node.right, level + 1)
        
        return res;
    }
    
    return helper(root, 0);
};


/**
* iterative
**/
function levelOrder(root: TreeNode | null): number[][] {
    const res = [];
    const stack: [TreeNode | null, number][] = [[root, 0]];
    
    while (stack.length) {
        const [node, level] = stack.pop();
        
        if (!node) continue;
        if (res.length === level) res.push([]);
        
        res[level].push(node.val);
        stack.push([node.right, level + 1]);
        stack.push([node.left, level + 1]);
    }
    
    return res;
};


function levelOrder(root: TreeNode | null): number[][] {
    const res = [];
    let queue: [TreeNode | null, number][] = [[root, 0]];
    
    if (!root) return res;
    
    while (queue.length) {
        const currLevel = [];
        
        res.push([]);
        
        for (const [node, level] of queue) {
            res[level].push(node.val);
            
            if (node.left) currLevel.push([node.left, level + 1]);
            if (node.right) currLevel.push([node.right, level + 1]);
        }
        
        queue = currLevel;
    }
    
    return res;


function levelOrder(root: TreeNode | null): number[][] {
    const res = [];
    
    if (!root) return res;
    
    let queue = [root];
    let level = 0;
    
    while (queue.length) {
        const currLevel = [];
        
        res.push([]);
        
        for (const node of queue) {
            res[level].push(node.val);
            
            if (node.left) currLevel.push(node.left);
            if (node.right) currLevel.push(node.right);
        }
        
        queue = currLevel;
        level++;
    }
    
    return res;
};



