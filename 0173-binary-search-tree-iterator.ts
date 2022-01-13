/**********
** 173. Binary Search Tree Iterator
****************************************/


/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
**/

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
* flattening BST
**/
class BSTIterator {
    idx: number;
    sortedNodes: number[];

    constructor(root: TreeNode | null) {
        this.idx = -1;
        this.sortedNodes = [];
        this._dfsInorder(root);
    }

    _dfsInorder(root) {
        if (!root) return;
        
        this._dfsInorder(root.left);
        this.sortedNodes.push(root.val);
        this._dfsInorder(root.right);
    }

    next(): number {
        this.idx++;
        return this.sortedNodes[this.idx];
    }

    hasNext(): boolean {
        return this.idx + 1 < this.sortedNodes.length;
    }
}


class BSTIterator {
    idx: number;
    sortedNodes: number[];

    constructor(root: TreeNode | null) {
        this.idx = -1;
        this.sortedNodes = [];
        this._dfsInorder(root);
    }

    _dfsInorder(root) {
        const stack = [];
        
        while (stack.length || root) {
            while (root) {
                stack.push(root);
                root = root.left;
            }
            
            root = stack.pop();
            this.sortedNodes.push(root.val);
            root = root.right;
        }
    }

    next(): number {
        this.idx++;
        return this.sortedNodes[this.idx];
    }

    hasNext(): boolean {
        return this.idx + 1 < this.sortedNodes.length;
    }
}


/**
* controlled recursion
**/
class BSTIterator {
    stack: TreeNode[];
    
    constructor(root: TreeNode | null) {
        this.stack = [];
        this._dfsInorderLeft(root);
    }
    
    _dfsInorderLeft(root) {
        while (root) {
            this.stack.push(root);
            root = root.left;
        }
    }

    next(): number {
        const node = this.stack.pop();
        
        if (node.right) this._dfsInorderLeft(node.right);
        
        return node.val;
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
}


