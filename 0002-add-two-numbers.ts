/**********
** 2. Add Two Numbers (medium)
****************************************/

/**
* Definition for singly-linked list.
**/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


/**
* math
**/
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const sentinel = new ListNode(null);
    let curr = sentinel;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            carry += l2.val;
            l2 = l2.next;
        }
        
        curr.next = new ListNode(carry % 10);
        curr = curr.next;
        carry = Math.floor(carry / 10);
    }
    
    return sentinel.next;
};


