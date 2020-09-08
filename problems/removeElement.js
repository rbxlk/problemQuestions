// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example 1:

// Given nums = [3,2,2,3], val = 3,

// Your function should return length = 2, with the first two elements of nums being 2.

// It doesn't matter what you leave beyond the returned length.

// Example 2:

// Given nums = [0,1,2,2,3,0,4,2], val = 2,

// Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

// Note that the order of those five elements can be arbitrary.

// It doesn't matter what values are set beyond the returned length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // pointer1 to keep track of all values which aren't the provided val
    let pointer1 = 0;
    // Cycle through the array using pointer2
    for (let pointer2 = 0; pointer2 < nums.length; pointer2++){
        // If val at pointer2 is not the provided val
        if (nums[pointer2] !== val) {
            // Value at pointer1 becomes the val at pointer2
            nums[pointer1] = nums[pointer2];
            // Increment pointer1
            pointer1++;
        }
    }
    return pointer1;
};

let result = removeElement([3, 2, 2, 3], 3);
console.log(result);