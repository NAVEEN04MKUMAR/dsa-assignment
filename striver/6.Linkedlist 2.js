//Find intersection point of Y LinkedList		

//Detect a cycle in Linked List	
class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function hasCycle(head){
    let current=head;
    const nodemap=new Map();
    while(current!==null){
       //if node already in map return true
        if(nodemap.has(current)){
        return true;
        }
//to te map not already added add now
        nodemap.set(current,true);
//move the pointer
        current=current.next;
    }
    return false;
}

let head=new node(1);
let node2=new node(1);
let node3=new node(1);
let node4=new node(1);
let node5=new node(1);
let node6=new node(1);
let node7=new node(1);
let node8=new node(2);

head.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
node5.next=node2;
node6.next=node7;
node7.next=node8;

let updatedHead = hasCycle(head);
//t.c:total number of node searches i have the o(N) and the insertion and the searching of the node at the worst time complexity:O(nlogn),finally o(2nlogn)

//challange:can you do tis one for the less time ?yes
class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function hasCycle(head){
    let slow=head;
    let fast=head;

while(fast!==null&&fast.next!==null){

    slow=slow.next;
    fast=fast.next.next;


    if(slow===fast){
        return true;
    }
}
    return false;
}

let head=new node(1);
let node2=new node(1);
let node3=new node(1);
let node4=new node(1);
let node5=new node(1);
let node6=new node(1);
let node7=new node(1);
let node8=new node(2);

head.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
node5.next=node2;
node6.next=node7;
node7.next=node8;

let updatedHead = hasCycle(head);
//t.c: i can do for the o(n) for moving the slowpointer of the number of the nodes in the list here we are not taking the any space here for to get that one  
//Reverse a LinkedList in groups of size k.		

//challange can you do less t.c and s.c:
yes 
function  findDuplicate(arr){
    let slow=arr[0];
    let fast=arr[0];

//find the cycle
while(fast!==null&&fast.next!==null){

    slow=arr[slow];
    fast=arr[arr[fast]];

    if(slow===fast){
        break;
    }
}
//find the entrance of cycle
     fast=arr[0];
     while(slow!==fast){
        slow=arr[slow];
        fast=arr[fast];

     }
    return slow;
}
const arr=[1,2,3,4,2];
console.log(findDuplicate(arr));

//t.c:i can iterate through the single loop then get the repeated element like the simple o(n) space complexity is o(1)


//Check if a LinkedList is palindrome or not…		
	
//Find the starting point of the Loop of Lin…		

//Starting point of loop in a Linked List



// Problem Statement: Given the head of a linked list that may contain a cycle, return the starting point of that cycle. If there is no cycle in the linked list return null.

// Examples
// Example 1:
// Input: LL: 1  2  3  4  5 

// Output: 3
// Explanation: This linked list contains a loop of size 3 starting at node with value 3.
// Example 2:
// Input: LL: LL: 1 -> 2 -> 3 -> 4 -> 9 -> 9
                


                            
// Node class represents a node in a linked list
class Node {
  constructor(data, next = null) {
    // Data stored in the node
    this.data = data;     
     // Pointer to the next node in the list
    this.next = next;    
  }
}

// Function to detect a loop in a linked list
// and return the starting node of the loop
function detectLoop(head) {
  // Use temp to traverse the linked list
  let temp = head;

  // Map to store all visited nodes
  const nodeMap = new Map();

  // Traverse the list using temp
  while (temp !== null) {
    // Check if temp has been encountered again
    if (nodeMap.has(temp)) {
      // A loop is detected, hence return temp
      return temp;
    }

    // Store temp as visited
    nodeMap.set(temp, true);

    // Iterate through the list
    temp = temp.next;
  }

  // If no loop is detected, return null
  return null;
}

// Create a sample linked list with a loop
const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
const node3 = new Node(3);
node2.next = node3;
const node4 = new Node(4);
node3.next = node4;
const node5 = new Node(5);
node4.next = node5;

// Make a loop from node5 to node2
node5.next = node2;

// Set the head of the linked list
const head = node1;

// Detect the loop in the linked list
const loopStartNode = detectLoop(head);

if (loopStartNode) {
  console.log("Loop detected. Starting node of the loop is: " + loopStartNode.data);
} else {
  console.log("No loop detected in the linked list.");
}

//Time Complexity: O(N) The code traverses the entire linked list once, where 'N' is the number of nodes in the list. Therefore, the time complexity is linear, O(N).
//Space Complexity : O(N) The code uses a hash map/dictionary to store encountered nodes, which can take up to O(N) additional space, where 'n' is the number of nodes in the list. Hence, the space complexity is O(N) due to the use of the map to track nodes.

//optimal approach: 1

                            
// Node class represents a
// node in a linked list
class Node {
  constructor(data, next = null) {
    // Data stored in the node
    this.data = data; 
    // Pointer to the next node in the list
    this.next = next;      
  }
}

function firstNode(head) {
    // Initialize a slow and fast
    // pointers to the head of the list
    let slow = head;
    let fast = head;

    // Phase 1: Detect the loop
    while (fast !== null && fast.next !== null) {
        // Move slow one step
        slow = slow.next;
        // Move fast two steps
        fast = fast.next.next;

        // If slow and fast meet,
        // a loop is detected
        if (slow === fast) {
            // Reset the slow pointer
            // to the head of the list
            slow = head;

            // Phase 2: Find the first
            // node of the loop
            while (slow !== fast) {
                // Move slow and fast
                // one step at a time
                slow = slow.next;
                fast = fast.next;

                // When slow and fast meet again,
                 // it's the first node of the loop
            }

            // Return the first node of the loop
            return slow;
        }
    }

    // If no loop is found, return null
    return null;
}

// Create a sample linked list
// with a loop
const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
const node3 = new Node(3);
node2.next = node3;
const node4 = new Node(4);
node3.next = node4;
const node5 = new Node(5);
node4.next = node5;

// Make a loop from node5 to node2
node5.next = node2;

// Set the head of the linked list
const head = node1;

// Detect the loop in the linked list
const loopStartNode = firstNode(head);

if (loopStartNode) {
  console.log("Loop detected. Starting node of the loop is: " + loopStartNode.data);
} else {
  console.log("No loop detected in the linked list.");
}
                            

//Time Complexity: O(N) The code traverses the entire linked list once, where 'n' is the number of nodes in the list. This traversal has a linear time complexity, O(n).
//Space Complexity : O(1) The code uses only a constant amount of additional space, regardless of the linked list's length. This is achieved by using two pointers (slow and fast) to detect the loop without any significant extra memory usage, resulting in constant space complexity, O(1).

                            
                        
//Flattening of a LinkedList


                            
class Node {
    constructor(x = null, nextNode = null, childNode = null) {
        this.data = x;
        this.next = nextNode;
        this.child = childNode;
    }
}

// Function to convert an array to a linked list
function convertArrToLinkedList(arr) {
    // Create a dummy node to serve as
    // the head of the linked list
    let dummyNode = new Node(-1);
    let temp = dummyNode;

    // Iterate through the array and
    // create nodes with array elements
    for (let val of arr) {
        // Create a new node with the array element
        temp.child = new Node(val);
        // Move the temporary pointer
        // to the newly created node
        temp = temp.child;
    }

    // Return the linked list starting
    // from the next of the dummy node
    return dummyNode.child;
}

// Function to flatten a linked list with child pointers
function flattenLinkedList(head) {
    let arr = [];

    // Traverse through the linked list
    while (head) {
        // Traverse through the child
        // nodes of each head node
        let t2 = head;
        while (t2) {
            // Store each node's data in the array
            arr.push(t2.data);
            // Move to the next child node
            t2 = t2.child;
        }
        // Move to the next head node
        head = head.next;
    }

    // Sort the array containing
    // node values in ascending order
    arr.sort((a, b) => a - b);

    // Convert the sorted array
    // back to a linked list
    return convertArrToLinkedList(arr);
}

// Print the linked list by
// traversing through child pointers
function printLinkedList(head) {
    while (head) {
        console.log(head.data + " ");
        head = head.child;
    }
    console.log();
}

// Print the linked list
// in a grid-like structure
function printOriginalLinkedList(head, depth = 0) {
    while (head) {
        console.log(head.data);

        // If child exists, recursively
        // print it with indentation
        if (head.child) {
            process.stdout.write(" -> ");
            printOriginalLinkedList(head.child, depth + 1);
        }

        // Add vertical bars
        // for each level in the grid
        if (head.next) {
            console.log("| ".repeat(depth));
        }
        head = head.next;
    }
}

// Create a linked list with child pointers
let head = new Node(5);
head.child = new Node(14);

head.next = new Node(10);
head.next.child = new Node(4);

head.next.next = new Node(12);
head.next.next.child = new Node(20);
head.next.next.child.child = new Node(13);

head.next.next.next = new Node(7);
head.next.next.next.child = new Node(17);

// Print the original
// linked list structure
console.log("Original linked list:");
printOriginalLinkedList(head);

// Flatten the linked list
// and print the flattened list
let flattened = flattenLinkedList(head);
console.log("\nFlattened linked list: ");
printLinkedList(flattened);


// Time Complexity: O(N*M) + O(N*M log(N*M)) + O(N*M)where N is the length of the linked list along the next pointer and M is the length of the linked list along the child pointer.

// O(N*M) as we traverse through all the elements, iterating through ‘N’ nodes along the next pointer and ‘M’ nodes along the child pointer.
// O(N*M log(N*M)) as we sort the array containing N*M (total) elements.
// O(N*M) as we reconstruct the linked list from the sorted array by iterating over the N*M elements of the array.
// Space Complexity : O(N*M) + O(N*M)where N is the length of the linked list along the next pointer and M is the length of the linked list along the child pointer.

// O(N*M) for storing all the elements in an additional array for sorting.
// O(N*M) to reconstruct the linked list from the array after sorting


//Optimal approach:


                            
class Node {
    // Constructors to initialize the
    // data, next, and child pointers
    constructor() {
        this.data = 0;
        this.next = null;
        this.child = null;
    }

    constructor(x) {
        this.data = x;
        this.next = null;
        this.child = null;
    }

    constructor(x, nextNode, childNode) {
        this.data = x;
        this.next = nextNode;
        this.child = childNode;
    }
}

// Merges two linked lists in a
// particular order based on the data value
function merge(list1, list2) {
    // Create a dummy node as
    // a placeholder for the result
    let dummyNode = new Node(-1);
    let res = dummyNode;

    // Merge the lists based on data values
    while (list1 !== null && list2 !== null) {
        if (list1.data < list2.data) {
            res.child = list1;
            res = list1;
            list1 = list1.child;
        } else {
            res.child = list2;
            res = list2;
            list2 = list2.child;
        }
        res.next = null;
    }

    // Connect the remaining
    // elements if any
    if (list1) {
        res.child = list1;
    } else {
        res.child = list2;
    }

    // Break the last node's
    // link to prevent cycles
    if (dummyNode.child) {
        dummyNode.child.next = null;
    }

    return dummyNode.child;
}

// Flattens a linked list
// with child pointers
function flattenLinkedList(head) {
    // If head is null or there
    // is no next node, return head
    if (head === null || head.next === null) {
        return head;
    }

    // Recursively flatten the
    // rest of the linked list
    let mergedHead = flattenLinkedList(head.next);
    head = merge(head, mergedHead);
    return head;
}

// Print the linked list by
// traversing through child pointers
function printLinkedList(head) {
    while (head !== null) {
        console.log(head.data + " ");
        head = head.child;
    }
    console.log();
}

// Print the linked list
// in a grid-like structure
function printOriginalLinkedList(head, depth) {
    while (head !== null) {
        console.log(head.data);

        // If child exists, recursively
        // print it with indentation
        if (head.child) {
            console.log(" -> ");
            printOriginalLinkedList(head.child, depth + 1);
        }

        // Add vertical bars for
        // each level in the grid
        if (head.next) {
            console.log();
            for (let i = 0; i < depth; ++i) {
                console.log("| ");
            }
        }
        head = head.next;
    }
}

// Create a linked list
// with child pointers
let head = new Node(5);
head.child = new Node(14);
head.next = new Node(10);
head.next.child = new Node(4);
head.next.next = new Node(12);
head.next.next.child = new Node(20);
head.next.next.child.child = new Node(13);
head.next.next.next = new Node(7);
head.next.next.next.child = new Node(17);

// Print the original linked list structure
console.log("Original linked list:");
printOriginalLinkedList(head, 0);

// Flatten the linked list
// and print the flattened list
let flattened = flattenLinkedList(head);
console.log("\nFlattened linked list: ");
printLinkedList(flattened);


//   Time Complexity: O( N*(2M) ) ~ O(2 N*M)where N is the length of the linked list along the next pointer and M is the length of the linked list along the child pointers.
//The merge operation in each recursive call takes time complexity proportional to the length of the linked lists being merged as they have to iterate over the entire lists. Since the vertical depth of the linked lists is assume to be M, the time complexity for a single merge operation is proportional to O(2*M).
//This operation operation is performed N number of times (to each and every node along the next pointer list) hence the resultant time complexity becomes: O(N* 2M). 
                        




