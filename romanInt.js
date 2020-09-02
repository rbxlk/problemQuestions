// QUESTION: ROMAN TO INTEGER - LEETCODE.COM

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, two is written as II in Roman numeral, just two one's added together.
// Twelve is written as, XII, which is simply X + II.The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
// Instead, the number four is written as IV.Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: "III"
// Output: 3

// ANSWER:
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  // Create an object of name/value pairs with Roman chars and their values
  let romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Initialise a total variable for the result
  let total = 0;

  //Cycle over the length of the string provided
  for (let i = 0; i < s.length; i++) {
    // Store the value of the current character and the
    // next char in the array of chars
    let currentInt = romanToInt[s.charAt(i)];
    let nextInt = romanToInt[s.charAt(i + 1)];

    // Protect against Null Pointer
    if (nextInt) {
      // If current value is >= to next value, add current value to total
      if (currentInt >= nextInt) {
        total += currentInt;
      }
      // Else, we have must take away the curren value from the next value and
      // skip the next value as we have already accounted for it
      else {
        total += nextInt - currentInt;
        i++;
      }
    } else {
      // Final number in string is always added
      total += currentInt;
    }
  }

  return total;
};

// Check
console.log(romanToInt("III"));
