// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2

// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;

    // while the node isn't null
    while( current !== null && current.next !== null){
        if ( current.val === current.next.val){
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}