/**********
** 21. Merge Two Sorted Lists (easy)
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
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const sentinel = new ListNode(null);
    let curr = sentinel;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        
        curr = curr.next;
    }
    
    if (l1) curr.next = l1;
    if (l2) curr.next = l2;
    
    return sentinel.next;
};


// recursive
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) return l2;
    if (!l2) return l1;
    
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        
        return l2;
    }
};


