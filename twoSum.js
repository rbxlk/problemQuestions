// QUESTION: TWO SUM, LEETCODE.COM

// Given an array of integers nums and and integer target, return the indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1]

// Constraints:

//     1 <= nums.length <= 105
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

// ANSWER

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Initialise a new Map to store the current value and its index
    let numberIndex = new Map();
    // Initialise a result array to push the final result too
    let result = []

    // Cycle through the array in a normal for loop
    for (let i = 0; i < nums.length; i++){
        //Check if the Map has the complementary number for the current value
        if (numberIndex.has(target - nums[i])) {
            // If yes, get the index position of that number from the Map
            // and push that value with the current index to result and return
            result.push(numberIndex.get(target - nums[i]), i)
            return result
        }
        // If not, add the current value and its index to the Map
        numberIndex.set(nums[i], i)
    }
    // Return empty array if no result found
    return result;
};

// Check
console.log(twoSum([2,7,11,15], 9));