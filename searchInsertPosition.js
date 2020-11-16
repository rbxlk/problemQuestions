// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while ( left <= right ){
        // Bit wise shift, gets rid of any unnecessary remainder when dividing by 2
        let mid = left + right >> 1;
        if(nums[mid] == target ){
            return mid
        }
        else if ( target < nums[mid]){
            right = mid - 1;
        } else {
            left = mid +1;
        }
    }
    return left;
};

console.log( searchInsert([1,3,5,6], 4));

// Answer used Binary Search to serach through a sorted array of numbers