// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for( let i = digits.length - 1; i >=0; i--){
        if( digits[i] !== 9 ){
            return digits[i] + 1;
        } else {
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits;
};

console.log(plusOne([9,9,9,9]))

// Important to keep track of ending with a 9, therefore we unshift a 1 if the loop exits with 9 as it's last argument.