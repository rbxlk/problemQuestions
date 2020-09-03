// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:

// All given inputs are in lowercase letters a-z.

//ANSWER ONE: O(n2)

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = (strs) => {
  // Protect against empty string and intialise longest
  let longest = "";
  if (strs.length === 0) {
    return longest;
  }

  // Initialise the first word in the array as the comparison word
  let comparisonWord = strs[0];

  // For each letter in the comparison word
  for (let i = 0; i < comparisonWord.length; i++) {
    let comparisonLetter = comparisonWord.charAt(i);
    for (let j = 1; j < strs.length; j++) {
      let currentWord = strs[j];
      let currentLetter = currentWord.charAt(i);
      if (i > currentWord.length || comparisonLetter !== currentLetter) {
        return longest;
      }
    }
    longest += comparisonLetter;
  }

  return longest;
};

// Check
console.log(longestCommonPrefix(["barking", "bar", "bad", "bob"]));
