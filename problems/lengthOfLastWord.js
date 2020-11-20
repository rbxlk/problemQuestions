// Given a string s consists of some words separated by spaces, 
// return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5

// Example 2:

// Input: s = " "
// Output: 0


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWordLength = 0;
    if ( s.length === 0 ){
        return lastWordLength
    }

    for( let i = s.length - 1; i >= 0; i--){
        if( s.charAt(i) !== ' '){
            lastWordLength++;
        } else if (lastWordLength != 0){
            break;
        }
    }
    return lastWordLength;
};

console.log(lengthOfLastWord('a      banana   '));

// Answer focuses on reversing through the array to find the first word. 
