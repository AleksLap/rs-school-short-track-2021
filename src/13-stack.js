/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(element) {
    this.element = element;
    this.arr = [];
  }

  push(element) {
    this.element = element;
    this.arr.push(this.element);
  }

  pop() {
    this.element = this.arr[this.arr.length - 1];
    delete this.arr.pop();
    return this.element;
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

module.exports = Stack;
