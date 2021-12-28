/**********
** 160. Intersection of Two Linked Lists (easy)
***************************************************/

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
* two-pointer
**/
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let pointerA = headA;
    let pointerB = headB;
    
    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }
    
    return pointerA;
};


/**
* hash table
**/
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const seen = new Set();
    
    while (headA) {
        seen.add(headA);
        headA = headA.next;
    }
    
    while (headB) {
        if (seen.has(headB)) {
            return headB;
        }
        
        headB = headB.next;
    }
    
    return null;
};


