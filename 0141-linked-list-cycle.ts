/**********
** 141. Linked List Cycle (easy)
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


// two pointer (floyd's cycle finding algorithm)
function hasCycle(head: ListNode | null): boolean {
    let fast = head;
    
    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        
        if (head === fast) return true;
    }
    
    return false;
};


// hash table
function hasCycle(head: ListNode | null): boolean {
    const seen = new Set();
    
    while (head) {
        if (seen.has(head)) return true;

        seen.add(head);
        head = head.next;
    }
    
    return false;
};


/**
** Tests
****/

const testCases = [];

test();


function test (testCases, func) {
  let allPassed = true;

  for (const [test, res] of testCases) {
    if (func(test) != res) {
      allPassed = false;

      console.log('\nTest Failed');
      console.log(`${test} !== ${res}`);
    }
  }

  if (allPassed) {
    console.log('\nAll Tests Passed');
  }

  console.log('\nFINISHED');
};

