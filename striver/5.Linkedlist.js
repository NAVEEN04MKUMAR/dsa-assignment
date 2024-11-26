

//represent each node in the linked list
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function arraytolinkedlist(arr){
    const dummynode=new Node(-1);
    let temp=dummynode;
    for(let i=0;i<arr.length;i++){
        temp.next=new Node(arr[i]);
        temp=temp.next;//move the temp pointer to the temp element
    }
    return dummynode.next;
}

function mergeTwoLists(list1,list2){
    
    const arr=[];
    let temp1=list1;
    let temp2=list2;
    
    
    while(temp1!==null){
        arr.push(temp1.data);
        temp1=temp1.next;
    }
    
        while(temp2!==null){
        arr.push(temp2.data);
        temp2=temp2.next;
    }
    arr.sort((a,b)=>a-b);
    const head=arraytolinkedlist(arr);
    return head;
}

// Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
    console.log();
}



const list1=new Node(1);
list1.next=new Node(3);
list1.next.next=new Node(5);
list1.next.next.next=new Node(7);

const list2=new Node(2);
list2.next=new Node(4);
list2.next.next=new Node(6);
list2.next.next.next=new Node(8);

const result=mergeTwoLists(list1,list2);
console.log(result);

console.log("First sorted linked list: ");
printLinkedList(list1);

console.log("second sorted linked list: ");
printLinkedList(list2);

console.log("after merging sorted linked list: ");
printLinkedList( result);

//Time Complexity: O(N1 + N2) + O(N log N) + O(N) where N1 is the number of linked list nodes in the first list and N2 is the number of linked list nodes in the second list and N is the total number of nodes (N1+N2). 
//Traversing both lists into the array owes O(N1 + N2), sorting the array takes O((N1+N2)*log(N1+N2)) and then traversing the sorted array and creating a list gives us another O(N1+N2).

//Space Complexity : O(N)+O(N) where N is the total number of nodes from both lists, N1 + N2. 
//O(N) to store all the nodes of both the lists in an external array and another O(N) to create a new combined list.



class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function mergeTwoLists(list1,list2){
    
       const dummynode=new Node(-1);
       let temp=dummynode;
       
      
       while(list1!==null&&list2!==null){
           if(list1.data<=list2.data){
               temp.next=list1;
               list1=list1.next;
           }else{
              temp.next=list2;
               list2=list2.next;  
           }
           temp=temp.next;
       }
       
       if(list1!==null){
           temp.next=list1;
       }else{
           temp.next=list2;
       }
    return  dummynode.next;
}
// Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
    console.log();
}


const list1=new Node(1);
 list1.next=new Node(3);
 list1.next.next=new Node(5);
 list1.next.next.next=new Node(7);

const  list2=new Node(2);
 list2.next=new Node(4);
 list2.next.next=new Node(6);
 list2.next.next.next=new Node(8);

const result=mergeTwoLists( list1, list2);
// console.log(result);

console.log("First sorted linked list: ");
printLinkedList(list1);

console.log("second sorted linked list: ");
printLinkedList( list2);

console.log("after merging sorted linked list: ");
printLinkedList( result);

//time complexity:O(N1+N2)  is individualy we track the linked list and 
//space complexity:O(1) 

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


//Find middle element in a Linked List

// Node class represents a node
// in a linked list
class Node {
    constructor(data, next) {
        // Data stored in the node
        this.data = data;   
        // Pointer to the next node in the list
        this.next = next;    
    }
}

// Function to find the middle
// node of a linked list
function middleNode(head) {
    // If the list is empty or has only
    // one element, return the head
    // as it's the middle.
    if (head === null || head.next === null) {
        return head;
    }

    let temp = head;
    let count = 0;

    // Count the number of nodes
    // in the linked list.
    while (temp !== null) {
        count++;
        temp = temp.next;
    }

    // Calculate the position of the middle node.
    const mid = Math.floor(count / 2) + 1;
    temp = head;

    // Traverse to the middle node
    // by moving temp to the middle position.
     while (temp !== null) {
        mid = mid - 1;

        // Check if the middle
        // position is reached.
        if (mid === 0) {
            // Break out of the loop
            // to return temp
            break;
        }
        // Move temp ahead
        temp = temp.next;
    }

    // Return the middle node.
    return temp;
}

// Creating a sample linked list: 
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find the middle node
const middlenode =middleNode(head);

// Display the value of the middle node
console.log("The middle node value is: " + middlenode.data);

//Time Complexity: O(N+N/2) The code traverses the entire linked list once and half times and then only half in the second iteration, first to count the number of nodes then then again to get to the middle node.
//Therefore, the time complexity is linear, O(N + N/2) ~ O(N).

//Space Complexity : O(1) There is constant space complexity because it uses a constant amount of extra space regardless of the size of the linked list. 
//We only use a few variables to keep track of the middle position and traverse the list, and the memory required for these variables does not depend on the size of the list.


                            
// Node class represents a node
// in a linked list
class Node {
    constructor(data, next) {
        // Data stored in the node
        this.data = data;   
        // Pointer to the next node in the list
        this.next = next;    
    }
}

// Function to find the middle
// node of a linked list
function middleNode(head) {
    // Initialize the slow pointer to the head.
    let slow = head;   
    // Initialize the fast pointer to the head.
    let fast = head;   

    // Traverse the linked list using
    // the Tortoise and Hare algorithm.
    while (fast && fast.next && slow) {
        
         // Move fast two steps.
        fast = fast.next.next; 
        
        // Move slow one step.
        slow = slow.next;       
    }

    // Return the slow pointer,
    // which is now at the middle node.
    return slow;  
}


// Creating a sample linked list: 
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find the middle node
const middlenode = middleNode(head);

// Display the value of the middle node
console.log("The middle node value is: " + middlenode.data);


//Time Complexity: O(N/2) The algorithm requires the 'fast' pointer to reach the end of the list which it does after approximately N/2 iterations (where N is the total number of nodes).
//Therefore, the maximum number of iterations needed to find the middle node is proportional to the number of nodes in the list, making the time complexity linear, or O(N/2) ~ O(N).

//Space Complexity : O(1) There is constant space complexity because it uses a constant amount of extra space regardless of the size of the linked list.
//We only use a few variables to keep track of the middle position and traverse the list, and the memory required for these variables does not depend on the size of the list.
                        
//Merge two sorted Linked List (use method u…		









//Remove N-th node from back of LinkedList	

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// Function to print the linked list
function printLL(head) {
    while (head !== null) {
        console.log(head.data + ' ');
        head = head.next;
    }
}

// Function to delete the Nth node from the end of the linked list
function removeNthFromEnd(head, N) {
    if (head === null) {
        return null;
    }
    let cnt = 0;
    let temp = head;

    // Count the number of nodes in the linked list
    while (temp !== null) {
        cnt++;
        temp = temp.next;
    }

    // If N equals the total number of nodes, delete the head
    if (cnt === N) {
        let newhead = head.next;
        head = null;
        return newhead;
    }

    // Calculate the position of the node to delete (res)
    let res = cnt - N;
    temp = head;

    // Traverse to the node just before the one to delete
    while (temp !== null) {
        res--;
        if (res === 0) {
            break;
        }
        temp = temp.next;
    }

    // Delete the Nth node from the end
    let delNode = temp.next;
    temp.next = temp.next.next;
    delNode = null;
    return head;
}

const arr = [1, 2, 3, 4, 5];
const N = 3;
let head = new Node(arr[0]);
head.next = new Node(arr[1]);
head.next.next = new Node(arr[2]);
head.next.next.next = new Node(arr[3]);
head.next.next.next.next = new Node(arr[4]);

// Delete the Nth node from the end and print the modified linked list
head = removeNthFromEnd(head, N);
printLL(head);

// Time Complexity: O(L)+O(L-N), We are calculating the length of the linked list and then iterating up to the (L-N)th node of the linked list, where L is the total length of the list.
// Space Complexity:  O(1), as we have not used any extra space.

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// Function to print the linked list
function printLL(head) {
    while (head !== null) {
        console.log(head.data + ' ');
        head = head.next;
    }
}

// Function to delete the Nth node from the end of the linked list
function removeNthFromEnd(head, N) {
       if (!head || N <= 0) return head;
    // Create two pointers, fastp and slowp
    let fastp = head;
    let slowp = head;

    // Move the fastp pointer N nodes ahead
    for (let i = 0; i < N; i++)
        fastp = fastp.next;

    // If fastp becomes null, the Nth node from the end is the head
    if (fastp === null)
        return head.next;

    // Move both pointers until fastp reaches the end
    while (fastp.next !== null) {
        fastp = fastp.next;
        slowp = slowp.next;
    }

    // Delete the Nth node from the end
    let delNode = slowp.next;
    slowp.next = slowp.next.next;
    delNode = null;
    return head;
}

const arr = [1, 2, 3, 4, 5];
const N = 3;
let head = new Node(arr[0]);
head.next = new Node(arr[1]);
head.next.next = new Node(arr[2]);
head.next.next.next = new Node(arr[3]);
head.next.next.next.next = new Node(arr[4]);

// Delete the Nth node from the end and print the modified linked list
head = removeNthFromEnd(head, N);
printLL(head);

// Time Complexity: O(N) since the fast pointer will traverse the entire linked list, where N is the length of the linked list.
// Space Complexity: O(1), as we have not used any extra space.

	
//Add two numbers as LinkedList	


// Add two numbers represented as Linked Lists

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
//here we are not the delete the targer node then we make the copy of the next node to the current node,for the next node we make the link to the next next node 
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
//
