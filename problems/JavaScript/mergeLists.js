// QUESTION - MERGE TWO LINKED LISTS - LEETCODE

// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
/
// ANSWER
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 // ANSWER
var mergeTwoLists = function (l1, l2) {
    // Create new placeholder list for merged values
    let placeholder = new ListNode();
    // Keep reference to the list for the result
    let head = placeholder;

    // While both l1 and l2 are not null
    while (l1 !== null && l2 !== null) {
        // If l1's value is <= l2's
        if (l1.val <= l2.val) {
            // Update placeholder with l1
            placeholder.next = l1;
            // Move to l1s next value
            l1 = l1.next;
        } else {
            // Update placeholder with l2
            placeholder.next = l2;
            // Move to l2s next value
            l2 = l2.next;
        }
        // Move to placeholders next value
        placeholder = placeholder.next;
    }

    // If l1 isn't null (after while finished)
    if (l1 !== null) {
        // Add the rest to placeholder
        placeholder.next = l1;
    } else {
        // Add the rest of l2 to placeholder
        placeholder.next = l2;
    }
    // return data structure starting from 2nd value
    return head.next
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
