// QUESTION - PALINDROME NUMBER - LEETCODE
// Determine whether an integer is a palindrome. An integer is a palindrome
// when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true

// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, 
// it becomes 121 -.Therefore it is not a palindrome.

// ANSWER
/**
 * 
 * @param {number} num
 * @return {boolean}
 */
let isPalindrome = (num) => {
    // If it's negative, always return false
    if (num < 0) {
        return false;
    }
    // Return true/false depending on if reversed number equals the provided number
    return num === reversedInteger(num);
};

/**
 * 
 * @param {number} num
 * @return {number}
 */
let reversedInteger = (num) => {
    // reversed var keeps track of the reversed number
    // param var keeps track of the current number
    let reversed = 0;

    while (num > 0) {
      // perform to get first iteration of reversed number
      reversed = (num % 10) + reversed * 10;
      // removes the previous number from current (param var)
      num = Math.floor(num / 10);

      // Repeat until the num provided is 0
    }
    return reversed;
}

// Check
console.log(isPalindrome(121));
