/**********
** 234. Palindrome Linked List (easy)
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
* iterative
**/
function isPalindrome(head: ListNode | null): boolean {
    const vals = [];

    while (head) {
        vals.push(head.val);
        head = head.next;
    }
    
    for (let i = 0; i < vals.length / 2; ++i) {
        if (vals[i] !== vals[~i + vals.length]) {
            return false;
        }
    }
    
    return true;
};


/**
* recursive
**/
function isPalindrome(head: ListNode | null): boolean {
    const helper = node => {
        if (node) {
            if (!helper(node.next) || node.val !== head.val) {
                return false;
                
            }
            
            head = head.next;
        }
        
        return true;
    }
    
    return helper(head);
};


/**
* reverse second half
**/
function isPalindrome(head: ListNode | null): boolean {
    let slow = head, fast = head;
    
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    slow = slow.next;
    
    let prev = null;
    
    while (slow) {
        [slow.next, prev, slow] = [prev, slow, slow.next];
    }
    
    while (prev) {
        if (prev.val !== head.val) return false;
        
        prev = prev.next;
        head = head.next;
    }
    
    return true;
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

