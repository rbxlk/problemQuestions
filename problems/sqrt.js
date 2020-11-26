// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

 

// Example 1:

// Input: x = 4
// Output: 2

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 1;
    let right = x;

    while ( left <= right ){
        // Logical bit wise shift, gets rid of any unnecessary remainder when dividing by 2
        // also the logical shift (>>>) accounts for bit overflows as the question states x can be 32bits
        let mid = left + right >>> 1;
        
        if ( mid * mid == x){
            return mid;
        } else if( mid * mid < x ){
            left = mid + 1;
        } else{
            right = mid - 1;
        }
    }
    return right;
};

console.log(mySqrt(2))

// Answer: Typical Binary Search, main difference is right is returned as we want left's previous value before +1 (which is right)