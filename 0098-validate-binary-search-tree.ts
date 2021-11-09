/**********
** 98. Validate Binary Search Tree (medium)
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


/**
* recursive
**/
function isValidBST(root: TreeNode | null): boolean {
    const helper = (node, low = -Infinity, high = Infinity) => {
        if (!node) return true;
        
        if (node.val <= low || node.val >= high) return false;
        
        const left = helper(node.left, low, node.val);
        const right = helper(node.right, node.val, high);
        
        return left && right;
    }
    
    return helper(root);
};


/**
* iterative
**/
function isValidBST(root: TreeNode | null): boolean {
    const stack: [TreeNode, number, number][] = [[root, -Infinity, Infinity]];
    
    while (stack.length) {
        const [root, low, high] = stack.pop();
        
        if (!root) continue;
        
        if (root.val <= low || root.val >= high) return false;
        
        stack.push([root.left, low, root.val]);
        stack.push([root.right, root.val, high]);
    }
    
    return true;
};


/**
* iterative - dfs inorder traversal
**/
function isValidBST(root: TreeNode | null): boolean {
    const vals = [];
    
    const inorder = node => {
        if (node) {
            inorder(node.left);
            vals.push(node.val);
            inorder(node.right);
        }
    }
    
    inorder(root);
    console.log(vals);
    
    for (let i = 1; i < vals.length; ++i) {
        if (vals[i] <= vals[i - 1]) return false;
    }
    
    return true;
};


