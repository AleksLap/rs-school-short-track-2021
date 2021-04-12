const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queueList = null;
    this.lastNode = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (this.queueList === null) {
      this.queueList = newNode;
    } else {
      this.lastNode = this.queueList;
      while (this.lastNode.next !== null) {
        this.lastNode = this.lastNode.next;
      }
      this.lastNode.next = newNode;
    }
    this.length += 1;
  }

  dequeue() {
    const nodeValue = this.queueList.value;
    this.queueList = this.queueList.next;
    this.length -= 1;
    return nodeValue;
  }
}

module.exports = Queue;
