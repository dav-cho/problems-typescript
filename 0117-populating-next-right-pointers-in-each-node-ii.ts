/**********
** 117. Populating Next Right Pointers in Each Node II (medium)
*******************************************************************/

/**
* using populated next right pointers
**/
function connect(root: Node | null): Node | null {
    if (!root) return null;
    
    const processChild = (child, prev, leftmost) => {
        if (child) {
            if (prev) prev.next = child;
            else leftmost = child;
            
            prev = child;
        }
        
        return [prev, leftmost];
    }
    
    let leftmost = root;
    
    while (leftmost) {
        let prev = null;
        let curr = leftmost;
        
        leftmost = null;
        
        while (curr) {
            [prev, leftmost] = processChild(curr.left, prev, leftmost);
            [prev, leftmost] = processChild(curr.right, prev, leftmost);
            curr = curr.next;
        }
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
        const size = queue.length;
        
        for (let i = 0; i < size; ++i) {
            const node = queue[i];
            
            if (i < size - 1) node.next = queue[i + 1];
            
            if (node.left) level.push(node.left);
            if (node.right) level.push(node.right);
        }
        
        queue = level;
    }
    
    return root;
};


