/**********
** 104. Maximum Depth of Binary Tree (easy)
***********************************************/

/**
* Definition for a binary tree node.
**/
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


// recursive
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    
    return Math.max(left, right) + 1;
};


// iterative
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    
    let queue = [root];
    let res = 0;
    
    while (queue.length) {
        const level = [];
        
        res++;
        
        for (const node of queue) {
            if (node.left) {
                level.push(node.left);
            }
            if (node.right) {
                level.push(node.right);
            }
        }
        
        queue = level;
    }
    
    return res;
};


function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    
    let queue = [root];
    let depth = 0;
    
    while (queue.length) {
        const level = [];
        
        for (const node of queue) {
            if (node.left) level.push(node.left);
            if (node.right) level.push(node.right);
        }
        
        queue = level;
        depth++;
    }
    
    return depth;
};


function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    
    const stack: [TreeNode, number][] = [[root, 1]];
    let depth = 0;
    
    while (stack.length) {
        const [root, currDepth] = stack.pop();
        
        if (root) {
            depth = Math.max(depth, currDepth);
            stack.push([root.left, currDepth + 1]);
            stack.push([root.right, currDepth + 1]);
        }
    }
    
    return depth;
};


function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    
    const stack: [TreeNode, number][] = [[root, 1]];
    let res = 0;
    
    while (stack.length) {
        const [node, currDepth] = stack.pop();
        
        res = Math.max(res, currDepth);
        
        if (node.left) stack.push([node.left, currDepth + 1]);
        if (node.right) stack.push([node.right, currDepth + 1]);
    }
    
    return res;
};


