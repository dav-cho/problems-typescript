/**********
** 106. Construct Binary Tree from Inorder and Postorder Traversal (medium)
*******************************************************************************/


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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const idxMap = {};
    
    inorder.forEach((val, i) => idxMap[val] = i);
    
    const helper = (left, right) => {
        if (left > right) return null;
        
        const root = new TreeNode(postorder.pop());
        const i = idxMap[root.val];
        
        root.right = helper(i + 1, right);
        root.left = helper(left, i - 1);
        
        return root;
    }
    
    return helper(0, inorder.length - 1);
};


