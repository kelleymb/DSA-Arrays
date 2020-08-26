// 1. Completed in array.js file

// 2. Completed in drills2.js file

// 3. Completed in drills2.js file

// 4. Completed in drills2.js file

// 5. URLify a string
function urlifyString(str) {
    // trim() method removes whitespace
    str = str.trim();
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            output += '%20';
        } else {
            output += str[i];
        }
    }
    return output;
}

// Input: tauhida parveen
// Output: tauhida%20parveen
// Input: www.thinkful.com /tauh ida parv een
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

// 6. Filtering an array
function filterArray(arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            newArr[newArr.length] = arr[i]
        }
    }
    return newArr;
}

// 7. Max sum in the array
function maxSum(arr) {
    
}

// 8. Merge arrays
function mergeArray() {

}

// 9. Remove characters
function removeChar() {

}

// 10. Products
function prod() {

}

// 11. 2D array
function twoD() {

}

// 12. String Rotation
function strRotate(str1, str2) {

}