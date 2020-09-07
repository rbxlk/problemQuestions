// QUESTION - Remove Duplicates from Sorted Array - LEETCODE

// Given a sorted array nums, remove the duplicates in-place such that each element appear
// only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input 
// array in -place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.

// ANSWER ONE: O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = (nums) => {
    for (let i = 0; i < nums.length; i++){
        while (nums[i] === nums[i+1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

let array = [1, 1, 1, 2, 4, 5, 6, 6];
let result = removeDuplicates(array);

console.log(result);

// ANSWER TWO: O(n);
let improveRemove = (nums) => {
    // First pointer for comparison which also acts as a count of unique numbers
    let pointer1 = 0;
    // Using a new pointer, start at 2nd value and loop
    for (let pointer2 = 1; pointer2 < nums.length; pointer2++){
        // Check if the pointer1 value is different from the pointer2
        if (nums[pointer1] !== nums[pointer2]) {
            // if yes, increase the pointer1 by 1
            pointer1++;
            // and make the nums value at this position equal to the new unique value
            nums[pointer1] = nums[pointer2]
        }
    }
    // return the length (add one due to indexing starting at 0 for arrays)
    return pointer1 + 1;
};

let result2 = improveRemove(array);
console.log(result2);
