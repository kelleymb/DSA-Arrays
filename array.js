const Memory = require('./memory');

const memory = new Memory();

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    // retrieving values
    // add an index offset, and get thevalue stored at a memory address
    // O(1) operations, retrieving values from any point in an array also
    // has best, worst, and average-case performance of O(1)
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    // popping values
    // rather than resize the array, you leave an extra space which 
    // will be filled at the next push
    // this is pointer arithmetic and memory access, O(1) operation
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    // inserting values
    // shift all of the values after the new value back 1 position
    // then put a new value in its correct place
    // best-case: O(1), the same as pushing
    // worst case: inserting the value at the start of the array, which 
    // requires every value to be shifted 1 memory address later; O(n)
    // avg case: inserting a value in the middle of the array,  shift half 
    // of the values along; O(n)
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    // removing values
    // similar to insering values, except you are copying the values
    // backwards to fill the space where you removed the value rather than
    // forwards to make space for a new value
    // best-case: O(1), same as popping
    // avg and worst case: O(n)
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

}

Array.SIZE_RATIO = 3;

module.exports = Array;