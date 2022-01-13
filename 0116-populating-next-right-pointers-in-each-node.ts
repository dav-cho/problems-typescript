/**********
** 116. Populating Next Right Pointers in Each Node (medium)
****************************************************************/


/**
* Definition for Node.
**/
class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}


/**
* using previously established next pointers
**/
function connect(root: Node | null): Node | null {
    if (!root) return null;
    
    let leftmost = root;
    
    while (leftmost.left) {
        let head = leftmost;
        
        while (head) {
            head.left.next = head.right;
            
            if (head.next) {
                head.right.next = head.next.left;
            }
            
            head = head.next;
        }
        
        leftmost = leftmost.left;
    }
    
    return root;
};


/**
* level order traversal (bfs)
**/
function connect(root: Node | null): Node | null {
    if (!root) return null;
    
    let queue = [root];
    
    while (queue.length) {
        const level = [];
        
        for (let i = 0; i < queue.length; ++i) {
            const node = queue[i];
            
            if (i < queue.length - 1) {
                node.next = queue[i + 1];
            }
            
            if (node.left) level.push(node.left);
            if (node.right) level.push(node.right);
        }
        
        queue = level;
    }
    
    return root;


