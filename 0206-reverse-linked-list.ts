/**********
** 206. Reverse Linked List (easy)
****************************************/


// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


// iterative
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    
    while (head) {
        [head.next, prev, head] = [prev, head, head.next];
    }
    
    return prev;
};


function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    
    while (head) {
        const nxt = head.next;
        
        head.next = prev;
        prev = head;
        head = nxt;
    }
    
    return prev;
};


// recursive
function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    
    const prev = reverseList(head.next);
    
    head.next.next = head;
    head.next = null;
    
    return prev;
};


