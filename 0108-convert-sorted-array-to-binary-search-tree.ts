/**********
** 108. Convert Sorted Array to Binary Search Tree
******************************************************/

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
* dfs preorder - choose left mid as root - recursive
**/
function sortedArrayToBST(nums: number[]): TreeNode | null {
    const dfsPreorder = (left, right) => {
        if (left > right) return null;
        
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);
        
        root.left = dfsPreorder(left, mid - 1);
        root.right = dfsPreorder(mid + 1, right);
        
        return root;
    }
    
    return dfsPreorder(0, nums.length - 1);
};


function sortedArrayToBST(nums: number[]): TreeNode | null {
    const helper = (left, right) => {
        if (left > right) return null;
        
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid])
        
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);
        
        return root;
    }
    
    return helper(0, nums.length - 1);
};


/**
* dfs preorder - choose left mid as root - iterative
**/
function sortedArrayToBST(nums: number[]): TreeNode | null {
    const left = 0;
    const right = nums.length - 1;
    const root = new TreeNode(nums[Math.floor(right / 2)]);
    const stack: [TreeNode, number, number][] = [[root, left, right]];
    
    while (stack.length) {
        const [node, left, right] = stack.pop();
        const mid = Math.floor((left + right) / 2);
        
        if (left < mid) {
            const leftMid = Math.floor((left + mid - 1) / 2);
            
            node.left = new TreeNode(nums[leftMid]);
            stack.push([node.left, left, mid - 1]);
        }
        
        if (right > mid) {
            const rightMid = Math.floor((mid + 1 + right) / 2);
            
            node.right = new TreeNode(nums[rightMid]);
            stack.push([node.right, mid + 1, right]);
        }
    }
    
    return root;
};


function sortedArrayToBST(nums: number[]): TreeNode | null {
    const left = 0;
    const right = nums.length - 1;
    const root = new TreeNode(nums[Math.floor(right / 2)]);
    const stack: [TreeNode | null, number, number][] = [[root, left, right]];
    
    while (stack.length) {
        const [node, left, right] = stack.pop();
        const mid = Math.floor((left + right) / 2);
        
        if (!node) continue;
        if (left < mid) {
            node.left = new TreeNode(nums[Math.floor((left + mid - 1) / 2)]);
            stack.push([node.left, left, mid - 1]);
        }
        if (right > mid) {
            node.right = new TreeNode(nums[Math.floor((mid + 1 + right) / 2)]);
            stack.push([node.right, mid + 1, right]);
        }
    }
    
    return root;
};


function sortedArrayToBST(nums: number[]): TreeNode | null {
    const left = 0;
    const right = nums.length - 1;
    const root = new TreeNode(nums[Math.floor(right / 2)]);
    const stack: [TreeNode, number, number][] = [[root, left, right]];
    
    while (stack.length) {
        const [node, left, right] = stack.pop();
        const mid = Math.floor((left + right) / 2);
        
        if (left > right) continue;
        
        if (left < mid) {
            node.left = new TreeNode(nums[Math.floor((left + mid - 1) / 2)]);
            stack.push([node.left, left, mid - 1]);
        }
        
        if (right > mid) {
            node.right = new TreeNode(nums[Math.floor((mid + 1 + right) / 2)]);
            stack.push([node.right, mid + 1, right]);
        }
    }
    
    return root;
};


/**
* dfs preorder - choose right mid as root - recursive
**/



/**
* dfs preorder - choose right mid as root - iterative
**/



/**
* dfs preorder - choose random as mid - recursive
**/



/**
* dfs preorder - choose random as mid - iterative
**/



