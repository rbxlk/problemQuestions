/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentStreak = nums[0];
    let globalStreak = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > (currentStreak + nums[i])) {
            currentStreak = nums[i];
        } else {
            currentStreak = currentStreak + nums[i];
        }
        if ( currentStreak > globalStreak) {
            globalStreak = currentStreak;
        }
    }
    return globalStreak;
};

console.log(maxSubArray([1, 2, 3, -5]));