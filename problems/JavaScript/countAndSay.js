// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

//     countAndSay(1) = "1"
//     countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character.
// Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, 
// replace the counts with a number and concatenate every saying.


/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let resultString = "1";

    for( let i = 1; i < n; i++ ){
        resultString = buildString(resultString);
    } 
    return resultString;

};

var buildString = (prevString) => {
    let char = prevString.charAt(0);
    let count = 1;
    let newString = "";
    
    for ( let i = 1; i < prevString.length; i++){
        if(prevString.charAt(i) != char ){
            newString += count.toString() + char;
            char = prevString.charAt(i);
            count = 1;
        } else {
            count++;
        }
    }
    newString += count.toString() + char;

    return newString
}

console.log(countAndSay(5));

// Important to incorporate the sliding window for the answer:
// 1) Divide the sequence into sub-groups where each one contains a list of identical adjacent digits
// 2) Count the numer of reoccuring digits in the first sub-group
// 3) Output the summary of the sub-group as |count, digit|.
// 4) Repeat until the end of the sequence, appending each sub group result onto the end of the first.