// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    let i = a.length - 1;
    let j = b.length -1;
    let remainder = 0;
    let sumString = '';

    while( i >=0 || j >= 0 || remainder > 0){
        let sum = remainder;

        if(i >= 0 ) {
            sum += (a[i--] - '0')
        }
        if(j >= 0 ) {
            sum += (b[j--] - '0')
        }
        // if sum is 3 or 1, it prepends 1 else 0
        sumString = (sum % 2) + sumString;
        // Arithmetic bitwise shift right to get any remainder (if sum is 3 or 2)
        remainder = sum >> 1;
    }
    return sumString;
};

console.log(
    addBinary('11', '1')
);

// Answer requires to keep track of the length of both a and b to ensure all binary digits are accounted for.