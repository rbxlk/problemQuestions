// QUESTION: VALID PARENTHESES - LEETCODE

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = (s) => {
  // Create var to be used as a stack
  let stack = [];
  // Initialise map of closing parentheses and their complement opening values
  let paranthesesMap = new Map();
  paranthesesMap.set(")", "(").set("}", "{").set("]", "[");

  for (let character of s) {
    // If the current character is a closing bracket
    if (paranthesesMap.has(character)) {
      // Get the top element of the stack, if the stacks empty use a dummy value
      let topElement = !stack.length ? "#" : stack.pop();
      // If the mapping for this bracket doesn't match the stack's top element, return false
      if (topElement != paranthesesMap.get(character)) {
        return false;
      }
    } else {
      // Else it must be an opening bracket, push to the stack
      stack.push(character);
    }
  }
  // return true if the stacks empty, false if it isn't
  return !stack.length;
};

let result = isValid("[{}]");
console.log(result);
