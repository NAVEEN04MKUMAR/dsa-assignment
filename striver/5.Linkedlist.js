//Reverse a LinkedList		


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function reverseList(head) {
  let temp = head; 
  const stack = []; 

  // Step 1: Push the values of the linked list onto the stack
  while (temp !== null) {
    stack.push(temp.data); 
    temp = temp.next; 
  }

  temp = head; // Reset temp to the head of the linked list

  // Step 2: Pop values from the stack and update the linked list
  while (temp !== null) {
    temp.data = stack.pop(); 
    temp = temp.next; 
  }

  return head; 
}


function printLinkedList(head) {
  let temp = head;
  let result = [];
  while (temp !== null) {
    result.push(temp.data);
    temp = temp.next;
  }
  console.log(result.join(" ")); 
}


let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);


console.log("Original Linked List:");
printLinkedList(head);

head= reverseList(head);
// console.log(result)

console.log("Reversed Linked List:");
printLinkedList(head);

//Time Complexity: O(2N) This is because we traverse the linked list twice: once to push the values onto the stack, and once to pop the values and update the linked list. 
//Both traversals take O(N) time, hence time complexity  O(2N) ~ O(N).
//Space Complexity: O(N) We use a stack to store the values of the linked list, and in the worst case, the stack will have all N values, 

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Function to reverse a linked list
// using the 3-pointer approach
function reverseList(head) {
  
    let temp = head;  
    let prev = null;  
    while (temp !== null) {  
        let front = temp.next;  
        // Reverse direction of current node's
        // 'next' pointer to point to 'prev'
        temp.next = prev;  
        
        // Move 'prev' to the current node,
        // preparing it for the next iteration
        prev = temp;
        
        // Move 'temp' to the 'front' node
        // (the next node), advancing traversal
        temp = front;  
    }
    return prev;  
}


function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.data + ' ');
    temp = temp.next;
  }
  console.log();
}


const head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);

process.stdout.write('Original Linked List: ');
printLinkedList(head);

reverseList(head);

process.stdout.write('Reversed Linked List: ');
printLinkedList(head);
//Time Complexity: O(N) The code traverses the entire linked list once, where 'n' is the number of nodes in the list. This traversal has a linear time complexity, O(n).
//Space Complexity: O(1) The code uses only a constant amount of additional space, regardless of the linked list's length

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function reverseList(head) {

    if (head === null || head.next === null) {
        return head;
    }
    var newHead = reverseList(head.next);
    // Save a reference to the node following
    // the current 'head' node.
    var front = head.next;
    
    // Make the 'front' node point to the current
    // 'head' node in the reversed order.
    front.next = head;
    
    // Break the link from the current 'head' node
    // to the 'front' node to avoid cycles.
    head.next = null;
    
    // Return the 'newHead,' which is the new
    // head of the reversed linked list.
    return newHead;
}

function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.data + ' ');
    temp = temp.next;
  }
  console.log();
}

const head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);

process.stdout.write('Original Linked List: ');
printLinkedList(head);

reverseList(head);

process.stdout.write('Reversed Linked List: ');
printLinkedList(head);

//Time Complexity: O(N) This is because we traverse the linked list twice: once to push the values onto the stack, and once to pop the values and update the linked list.
//Both traversals take O(N) time.
//Space Complexity : O(1) No additional space is used explicitly for data structures or allocations during the linked list reversal process.
//However, it's important to note that there is an implicit use of stack space due to recursion. 

//Find the middle of LinkedList		
	
//Merge two sorted Linked List (use method u…		
	
//Remove N-th node from back of LinkedList		
	
//Add two numbers as LinkedList	


Add two numbers represented as Linked Lists

//Problem Statement: Given the heads of two non-empty linked lists representing two non-negative integers.
//The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

class Node {
    constructor(value){
    this.value=value;
    this.next=null
    }
}
//we are sum the 1st node from the both the list add to new node and move on to the nextnode by the given linked list and the newly created linked list 
//add the carry to the next sum from the given node

// Loop through lists l1 and l2 until you reach both ends, and until carry is present.
// Set sum=l1.val+ l2.val + carry.
// Update carry=sum/10.
// Create a new node with the digit value of (sum%10) and set it to temp node's next, then advance temp node to next.
// Advance both l1 and l2.
// Return dummy's next node.
function addTwoNumbers (list1,list2){
    
    let dummy=new Node();
    let temp=dummy;
    let carry=0;
    
    
    while(list1!==null||list2||carry!==0){
 let sum =carry;       
        if(list1!==null){
            sum+=list1.value;
            list1=list1.next;
        }
         if(list2!==null){
            sum+=list2.value;
            list2=list2.next;
        }
        carry=Math.floor(sum/10);
        temp.next=new Node(sum%10);
        temp=temp.next;
    }
 return dummy.next;   
}


function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.value + ' ');
    temp = temp.next;
  }
  console.log();
}

const head1 = new Node(8);
head1.next = new Node(8);
head1.next.next = new Node(8);
// head1.next.next.next = new Node(4);

const head2= new Node(7);
head2.next = new Node(7);
head2.next.next = new Node(7);
// head2.next.next.next = new Node(4);

process.stdout.write('Original Linked List: ');
printLinkedList(head1);
printLinkedList(head2);

const result=addTwoNumbers(head1,head2);
console.log(result)

process.stdout.write('Reversed Linked List: ');
printLinkedList(result);

//time complexity:O(max(m,n)) 
//space complexity:O(max(m,n)) 

	
//Delete a given Node when a node is given.

class Node {
    constructor(val){
    this.val=val;
    this.next=null
    }
}
function getnode(list,value){
    while(list!==null&&list.val!==value){
        list=list.next;
    }
    return list;
}

function deletenode(node){
if(node!==null&&node.next!==null){
    node.val=node.next.val;
    node.next=node.next.next;
    
      }   
}


function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.val + ' ');
    temp = temp.next;
  }
  console.log();
}

const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);

process.stdout.write('Original Linked List: ');
printLinkedList(head1);

const result=getnode(head1,2);
console.log(result)

// const resulta=
deletenode(result);
// console.log(resulta)

process.stdout.write('delete node Linked List: ');
printLinkedList(head1);
// printLinkedList(resulta);
