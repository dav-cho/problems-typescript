/**********
** 19. Remove Nth Node From End of List
*******************************************/


// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
* one-pass
**/
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const sentinel = new ListNode(null, head);
    let slow = sentinel;
    let fast = head;
    
    while (n--) fast = fast.next;
    
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next ? slow.next.next : null;
    
    return sentinel.next;
};


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const sentinel = new ListNode(null, head);
    let left = sentinel;
    let right = head;
    
    for (let i = 0; i < n; ++i) {
        right = right.next;
    }
    
    while (right) {
        left = left.next;
        right = right.next;
    }
    
    left.next = left.next.next;
    
    return sentinel.next;
};


/**
* two-pass
**/
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const sentinel = new ListNode(null, head);
    let size = 0;
    let curr = sentinel;
    
    while (curr) {
        curr = curr.next;
        size++;
    }
    
    size -= n
    curr = sentinel;
    
    while (--size) curr = curr.next;
    
    curr.next = curr.next ? curr.next.next : null;
    
    return sentinel.next;
};


