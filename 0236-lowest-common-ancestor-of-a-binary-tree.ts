/**********
** 236. Lowest Common Ancestor of a Binary Tree (medium)
************************************************************/


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
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let res = null;
    
    const dfs = node => {
        if (!node) return false;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        const mid = node === p || node === q;
        
        if (+left + +right + +mid >= 2) res = node;
        
        return left || right || mid;
    }
    
    dfs(root);
    
    return res;
};


/**
* iterative with parent pointers
**/



/**
* iterative without parent pointers
**/



