/**********
** 101. Symmetric Tree (easy)
****************************************/

/**
* recursive
**/
function isSymmetric(root: TreeNode | null): boolean {
    const helper = (nodeA, nodeB) => {
        if (!nodeA && !nodeB) return true;
        if (!nodeA || !nodeB) return false;
        if (nodeA.val !== nodeB.val) return false;
        
        const outside = helper(nodeA.left, nodeB.right);
        const inside = helper(nodeA.right, nodeB.left);
        
        return outside && inside;
    }
    
    return helper(root, root);
};


function isSymmetric(root: TreeNode | null): boolean {
    const helper = (nodeA, nodeB) => {
        if (!nodeA && !nodeB) return true;
        if (!nodeA || !nodeB) return false;
        if (nodeA.val !== nodeB.val) return false;
        
        const left = helper(nodeA.left, nodeB.right);
        const right = helper(nodeA.right, nodeB.left);
        
        return left && right;
    }
    
    return helper(root, root);
};


/**
* iterative
**/
function isSymmetric(root: TreeNode | null): boolean {
    const stack = [[root, root]];
    
    while (stack.length) {
        const [nodeA, nodeB] = stack.pop();
        
        if (!nodeA && !nodeB) continue;
        if (!nodeA || !nodeB) return false;
        if (nodeA.val != nodeB.val) return false;
        
        stack.push([nodeA.left, nodeB.right]);
        stack.push([nodeA.right, nodeB.left]);
    }
    
    return true;
};


