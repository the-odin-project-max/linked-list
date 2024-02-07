class Node {
  constructor(value = null, nextNode = null) {
	this.value = value;
	this.nextNode = nextNode;
  }
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	
	append(value) {
		if (this.head === null) {
			this.head = new Node(value);
			return;
		}
		let current = this.head;
		while (current.nextNode !== null) {
			current = current.nextNode;
		}
		current.nextNode = new Node(value);
	}

	prepend(value) {
		const newHead = new Node(value, this.head);
		this.head = newHead;
	}

	size() {
		let count = 0;
		let current = this.head;
		while (current !== null) {
			count++;
			current = current.nextNode;
		}
		return count;
	}

	head() {
		return this.head;
	}

	tail() {
		let current = this.head;
		while (current.nextNode !== null) {
			current = current.nextNode;
		}
		return current;
	}

	at(index) {
		let count = 0;
		let current = this.head;
		while (current !== null) {
			if (count === index) {
				return current;
			}
			count++;
			current = current.nextNode;
		}
		return null;
	}

	pop() {
		let current = this.head;
		let previous = null;
		while (current.nextNode !== null) {
			previous = current;
			current = current.nextNode;
		}
		previous.nextNode = null;
	}

	contains(value) {
		let current = this.head;
		while (current !== null) {
			if (current.value === value) {
				return true;
			}
			current = current.nextNode;
		}
		return false;
	}

	find(value) {
		let index = 0;
		let current = this.head;
		while (current !== null) {
			if (current.value === value) {
				return index;
			}
			current = current.nextNode;
			index++;
		}
		return null;
	}

	toString() {
		let current = this.head;
		let str = '';
		while (current !== null) {
			str += '( ' + current.value + ' ) -> ';
			if (current.nextNode == null) {
				str += 'null';
			}
			current = current.nextNode;
		}
		return str;
	}

	insertAt(value, insertIndex) {
		let currentIndex = 0;
		let current = this.head;
		let previous = null;
		while (current !== null) {
			if (currentIndex === insertIndex) {
				const newNode = new Node(value, current);
				previous.nextNode = newNode;
				return;
			}
			currentIndex++;
			previous = current;
			current = current.nextNode;
		}
	}

	removeAt(removeIndex) {
		let currentIndex = 0;
		let current = this.head;
		let previous = null;
		while (current !== null) {
			if (currentIndex === removeIndex) {
				previous.nextNode = current.nextNode;
				return;
			}
			currentIndex++;
			previous = current;
			current = current.nextNode;
		}
	}

}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append("Hello");

console.log(list.toString());
console.log('Size : ', list.size());
console.log('Head : ', list.head);
console.log('Tail : ', list.tail());
console.log('At 2 : ', list.at(2));
list.pop();
console.log(list.toString());
console.log('Contains 2 : ', list.contains(2));
console.log('Find 2 : ', list.find(2));
list.prepend(0);
console.log(list.toString());
console.log('Contains 0 : ', list.contains(0));
console.log('Find 0 : ', list.find(0));
list.insertAt(4, 2);
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
