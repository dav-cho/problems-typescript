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
* recursive with valid range
**/
function isValidBST(root: TreeNode | null): boolean {
    const validate = (node, lower, upper) => {
        if (!node) return true;
        if (node.val <= lower || node.val >= upper) {
            return false;
        }
        
        const left = validate(node.left, lower, node.val);
        const right = validate(node.right, node.val, upper);
        
        return left && right;
    }
    
    return validate(root, -Infinity, Infinity);
};


/**
* iterative with valid range
**/
function isValidBST(root: TreeNode | null): boolean {
    const stack: [TreeNode, number, number][] = [[root, -Infinity, Infinity]];
    
    while (stack.length) {
        const [node, lower, upper] = stack.pop();
        
        if (!node) continue;
        if (node.val <= lower || node.val >= upper) return false;
        
        stack.push([node.left, lower, node.val]);
        stack.push([node.right, node.val, upper]);
    }
    
    return true;
};


/**
* dfs inorder traversal - recursive
**/
function isValidBST(root: TreeNode | null): boolean {
    let prev = -Infinity;
    
    const dfsInorder = node => {
        if (!node) return true;
        if (!dfsInorder(node.left)) return false;
        if (node.val <= prev) return false;
        
        prev = node.val;
        
        return dfsInorder(node.right);
    }
    
    return dfsInorder(root);
};


/**
* dfs inorder traversal - iterative
**/
function isValidBST(root: TreeNode | null): boolean {
    const stack = [];
    let prev = -Infinity;
    
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        
        root = stack.pop();
        
        if (root.val <= prev) return false;
        
        prev = root.val;
        root = root.right;
    }
    
    return true;
};


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


