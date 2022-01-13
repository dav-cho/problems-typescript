/**********
** 105. Construct Binary Tree from Preorder and Inorder Traversal (medium)
******************************************************************************/

/**
* recursive
**/
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderIdxMap = {};
    let preorderIdx = 0;
    
    inorder.forEach((val, i) => inorderIdxMap[val] = i);
    
    const helper = (left, right) => {
        if (left > right) return null;
        
        const root = new TreeNode(preorder[preorderIdx++]);
        const i = inorderIdxMap[root.val];
        
        root.left = helper(left, i - 1);
        root.right = helper(i + 1, right);
        
        return root;
    }
    
    return helper(0, preorder.length - 1);
};


