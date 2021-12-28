/**********
** 250. Count Univalue Subtrees (medium)
********************************************/


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
* dfs passing parent values
**/
function countUnivalSubtrees(root: TreeNode | null): number {
    const isValidPart = (node, val) => {
        if (!node) return true;
        
        const left = isValidPart(node.left, node.val);
        const right = isValidPart(node.right, node.val);
        
        if (!left || !right) return false;
        
        count++;
        return node.val === val;
    }
    
    let count = 0;
    
    isValidPart(root, 0);
    
    return count
};


/**
* dfs
**/
function countUnivalSubtrees(root: TreeNode | null): number {
    if (!root) return 0;
    
    const isUni = node => {
        if (!node.left && !node.right) {
            count++;
            
            return true;
        }
        
        let ans = true;
        
        if (node.left) {
            ans = isUni(node.left) && ans && node.left.val === node.val;
        }
        if (node.right) {
            ans = isUni(node.right) && ans && node.right.val === node.val;
        }
        
        count += Number(ans);
        
        return ans;
    }
    
    let count = 0;
    
    isUni(root)
    
    return count;
};


