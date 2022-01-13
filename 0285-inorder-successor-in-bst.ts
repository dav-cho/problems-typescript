/**********
** 285. Inorder Successor in BST (medium)
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
* without bst properties (any binary tree)
**/
function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
    let prev = null;
    let successor = null;
    
    const inorderCase2 = node => {
        if (!node) return;
        
        inorderCase2(node.left);
        
        if (prev === p) successor = node;
        
        prev = node;
        inorderCase2(node.right)
    }
    
    if (p.right) {
        let leftmost = p.right;
        
        while (leftmost.left) {
            leftmost = leftmost.left;
        }
        
        successor = leftmost;
    } else {
        inorderCase2(root);
    }
    
    return successor;
};


/**
* using bst properties
**/
function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
    let successor = null;
    
    while (root) {
        if (p.val >= root.val) {
            root = root.right
        } else {
            successor = root;
            root = root.left;
        }
    }
    
    return successor;
};


