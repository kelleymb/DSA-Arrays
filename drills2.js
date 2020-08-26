const Array = require('./array');

function main() {

    Array.SIZE_RATIO = 3;

    // Create an instance of the array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    console.log(arr);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
    // length: 6, cap: 12, ptr: 3

    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
    // length: 3, cap: 12, ptr: 3

    // Print the 1st item in the array 'arr'
    console.log(arr.get(0))

    arr = new Array();
    arr.push('tauhida');
    console.log(arr.get(0))
    // memory array is not meant for strings

    // resize()
    // when things are added/modified, resize ensures that there is
    // enough space to hold the array
}

main();