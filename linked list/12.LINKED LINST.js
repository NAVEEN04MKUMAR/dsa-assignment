status:do 2,6,8,9


1.insert node 

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert a node at a specified index using recursion
    insertrech(value, index) {
        this.head = this.insertrec(value, index, this.head);
    }


insertrec(value,index,node){
    //if index is zero then create the new node then add the node at beginning
if(index===0){
    const temp=new Node(value,node);
    this.size++;
    return temp;
}
//insert node using recursion
node.next=this.insertrec(value,index-1,node.next);
return node;
}
}
const Linkedlist = new linkedlist();

Linkedlist.insertrech(1, 0); // Insert 1 at index 0
Linkedlist.insertrech(2, 1); 
Linkedlist.insertrech(3, 2); 
Linkedlist.insertrech(4, 0); 

// Print the linked list
let current = Linkedlist.head;
while (current !== null) {
   console.log(current.value);
    current = current.next;
}



2.
//3.merge two linkedlist

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertLast(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

}
}
function merge(first,second){
let f=first.head;
let s=second.head;

const ans = new LinkedList();

while(f!==null&&s!==null){
    if(f.value<s.value){
        ans.insertLast(f.value);
        f=f.next;
    }else{
        ans.insertLast(s.value);
        s=s.next;
    }
}
while(f!==null){
    ans.insertLast(f.value);
    f=f.next;
}

while(s!==null){
    ans.insertLast(s.value);
    s=s.next;
}

return ans;

}

const firstlist = new LinkedList();
firstlist.insertLast(1);
firstlist.insertLast(3);
firstlist.insertLast(5);

const secondlist = new LinkedList();
secondlist.insertLast(2);
secondlist.insertLast(4);
secondlist.insertLast(6);

const mergedlist = merge(firstlist, secondlist);

// Print the merged list
let current = mergedlist.head;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}

//4.detect cycle

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function detectcycle(head){
let length=0;

    let slowpointer=head;
    let fastpointer=head;

while(fastpointer!==null && fastpointer.next!==null){
slowpointer=slowpointer.next;
fastpointer=fastpointer.next.next;
if(fastpointer===slowpointer){
    length=calculatecyclelength(slowpointer);
    break;
}
}

if (length === 0) {
    return null;
}

let firstpointer=head;
let secondpointer=head;

// Move second pointer 'length' steps ahead
while(length>0){
    secondpointer=secondpointer.next;
    length--;
}

while(firstpointer!==secondpointer){
    firstpointer=firstpointer.next;
    secondpointer=secondpointer.next;
}
    
return secondpointer;
}

function calculatecyclelength(node) {
    let length = 1;
    let current = node.next;

    while (current !== node) {
        length++;
        current = current.next;
    }
    return length;
}

function createlinkedlistwithcycle() {
    const head = new ListNode(0);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);

    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; 
    return head;
}

const headWithCycle = createlinkedlistwithcycle();
const cycleStartNode = detectcycle(headWithCycle);

console.log("Starting node of the cycle:", cycleStartNode.val);

//5.bubblesort

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    bubbleSort() {
        let sorted = false;
        while (!sorted) {
            sorted = true;
            let current = this.head;
            let prev = null;

while(current&&current.next){
    if(current.value>current.next.value){
        sorted=false;

if(prev==null){
    //swap the heand and next node
    const temp=current.next;
   current.next=temp.next;
   temp.next=current;
   this.head=temp;
}else{
    //swap the non head nodes
    const temp=current.next;
    current.next=temp.next;
    temp.next=current;
    prev.next=temp;
}
    }
              prev = current;
              current = current.next;
      
    }
        }
    }
}
    const linkedList = new LinkedList();
    linkedList.push(5);
    linkedList.push(3);
    linkedList.push(8);
    linkedList.push(1);
    
    console.log("Before sorting:");
    linkedList.print(); // Output: 5 -> 3 -> 8 -> 1
    
    linkedList.bubbleSort();
    
    console.log("After sorting:");
    linkedList.print(); // Output: 1 -> 3 -> 5 -> 8


//5.bubblesort 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    bubbleSort() {
        if (!this.head || !this.head.next) return;
        let sorted = false;
        while (!sorted) {
            sorted = true;
            let current = this.head;
            let prev = null;

while(current&&current.next){
    if(current.value>current.next.value){
        sorted=false;


if(prev==null){
    //swap the head and next node
    const temp=current.next;
   current.next=temp.next;
   temp.next=current;
   this.head=temp;
}else{ 
    //swap the non head nodes
    const temp=current.next;
    current.next=temp.next;
    temp.next=current;
    prev.next=temp;
}
    }
              prev = current;
              current = current.next;
    }
        }
    }
}
    const linkedList = new LinkedList();
    linkedList.push(5);
    linkedList.push(3);
    linkedList.push(8);
    linkedList.push(1);
    
    console.log("Before sorting:");
    linkedList.print(); // Output: 5 -> 3 -> 8 -> 1
    
    linkedList.bubbleSort();
    
    console.log("After sorting:");
    linkedList.print(); // Output: 1 -> 3 -> 5 -> 8

6.

//7.Reversed linked list

//Method:1

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverselist(head){

//verify that it is the empty or only node present
if(head==null||head.next==null){
    return head;
}

let prev=null;
let present=head;
let next=present.next;

//
while(present!==null){
present.next=prev;//reverse the diection of present one
prev=present;
present=next;

//avoid the null reference error verify that next one is not null
if(next!==null){
    next=next.next;
}
}
return prev;
}

//Method:2

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }



insert(value){
    const newnode=new Node(value);
    if(!this.head){
        this.head=newnode;//if list is empty then only one node is present then it will become the head and tail
    }else{
        //if list is not empty then we traversal te entire list add the node at the last
        let current=this.head;

        while(current.next){
            current=current.next;
        }
        current.next=newnode;
    }
    this.size++;
}




reverse(){
    if(this.size<2){
        return;
    }
let prev=null;
let current=this.head;
let next=current.next;

     // Traverse the list and reverse the links
while(current!==null){
    current.next=prev;
    prev=current;
    current=next;
    
    if(next!==null){
        next=next.next;
    }
}
this.head=prev;//assign the head previously it is the las element
}


display() {
    let current = this.head;
    const values = [];
    while (current) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

}

// Create a new linked list
const linkedlist = new Linkedlist();

// Insert elements into the linked list
linkedlist.insert(11);
linkedlist.insert(12);
linkedlist.insert(13);
linkedlist.insert(14);
linkedlist.insert(15);

console.log("Original Linked List:");
linkedlist.display(); 

// Reverse the linked list
linkedlist.reverse();

console.log("Reversed Linked List:");
linkedlist.display(); 

8.
9.
//10.reorderlist

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function middlenode(head){
    let slow=head;
    let fast=head;
    while(fast!==null&&fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;   
}

    // Function to reverse the linked list
    function reverselist(head){
        let prev=null;
        let current =head;
        let next=null;
    
        while(current!==null){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        return prev;   
    }

function reorderlist(head) {
    if (head === null || head.next === null) {
        return;
    }

    const mid = middlenode(head);

    const reversedsecondhalf = reverselist(mid);
    
let firsthalf=head;
let secondhalf=reversedsecondhalf;

while(firsthalf!==null&&secondhalf!==null){
    const tempfirsthalfnext=firsthalf.next;
    const tempsecondhalfnext=secondhalf.next;
    
    
        // Link first half node to second half node
    firsthalf.next=secondhalf;
     // If we haven't finished with the first half, link second half node to the next first half node
        if (tempfirsthalfnext === null) break; // Break if it's the last node in the first half
    secondhalf.next=firsthalf;
    
    firsthalf=tempfirsthalfnext;
    secondhalf=tempsecondhalfnext;
}
if (firsthalf !== null) {
    firsthalf.next = null;
}
}



// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Call the reorderList function to reorder the linked list
reorderlist(head);

// Print the reordered linked list
let current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

//11.reverse the every kth group

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseKgroup(head, k) {
    if (k <= 1 || head === null) {
        return head;
    }

    let current = head; // Current node in the group
    let prev = null;    // Previous node before the group

    const length = getlength(head);
    const count = Math.floor(length / k);

    while (count > 0) {
        let last = prev;      // Last node of the previous group
        let newEnd = current; // New end of the current group

        // Initialize a pointer to the next node
        let next = current.next;

        // Reverse the current group of k nodes
        for (let i = 0; current !== null && i < k; i++) {
            current.next = prev; 
            prev = current;      
            current = next;      
            if (next !== null) {
                next = next.next; 
            }
        }
        // Connect the reversed group to the previous group or update the head
        if (last !== null) {
            last.next = prev;
        } else {
            head = prev; // Update the head if it's the first group
        }
        newEnd.next = current; // Connect the new end of the group to the next group
        prev = newEnd; // Update prev to the new end
        count--;       // Decrement the group count
    }

    return head;
}

function getlength(head) {
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }
    return length;
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
const head = new ListNode(1);
let current = head;
for (let i = 2; i <= 8; i++) {
    current.next = new ListNode(i);
    current = current.next;
}

const k = 3;
const reversedHead = reverseKgroup(head, k);

current = reversedHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

status:do 4,5,6
# Assignment Questions 12
<aside>
💡 **Question 1**
Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

**Example 1:**

```
Input:
LinkedList: 1->2->3->4->5
Output:1 2 4 5

```
**Example 2:**

```
Input:
LinkedList: 2->4->6->7->5->1
Output:2 4 6 5 1
```
class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function deletemiddlenode(head){
    if(head===null||head.next===null){//when node we have such as the single node
        return head;
    }
    //assign the pointer
    let slowptr=head;
    let fastptr=head;
    let prevptr=null;
    
//this will assign the after find the middle node it will move into skip the middle node
    while(fatsptr!==null&&fastptr.next!==null){
        fastptr=fastptr.next.next;//move the pointer two step at a time
        prevptr=slowptr;//helpful to stand the before the middle node
        slowptr=slowptr.next;//stand at the middle node
    }
    
    prevptr.next=slowptr.next;
    return head;

}

//before we delete the middle node
const head = new node(1);
head.next = new node(2);
head.next.next = new node(3);
head.next.next.next = new node(4);
head.next.next.next.next = new node(5);

console.log("Original linked list:");
printlinkedlist(head);
//after delete the middle node
const newhead = deletemiddlenode(head);

console.log("Modified linked list:");
printlinkedlist(newhead);


function printlinkedlist(head) {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
//     Time Complexity:
// Time complexity: O(n), where n is the number of nodes in the list. We traverse the list once to find the middle node.
// Space Complexity:
// Space complexity: O(1), since the operation is done in-place, without using any extra space other than pointers.

</aside>

<aside>
💡 **Question 2**

Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

**Example 1:**

```
Input:
N = 3
value[] = {1,3,4}
x(position at which tail is connected) = 2
Output:True
Explanation:In above test case N = 3.
The linked list with nodes N = 3 is
given. Then value of x=2 is given which
means last node is connected with xth
node of linked list. Therefore, there
exists a loop.
```

**Example 2:**

```
Input:
N = 4
value[] = {1,8,3,4}
x = 0
Output:False
Explanation:For N = 4 ,x = 0 means
then lastNode->next = NULL, then
the Linked list does not contains
any loop.
```
class node{  
  constructor(value){  
this.value=value;
this.next=null;
}
}
function findnthnode(head,n){
let firstpointer=head;
let secondpointer=head;
//moving the node towards the null one step at the time
for(let i=0;i<n;i++){
//if the number of nodes we have lesser than the nth node from end return null    
    if(firstpointer===null){
    return null;
}
firstpointer=firstpointer.next;
}
//if until first reaches the null then we move the both the pointer one step at a time
while(firstpointer!==null){
    firstpointer=firstpointer.next;
    secondpointer=secondpointer.next;
}
return secondpointer;
}
const head = new node(1);
head.next = new node(2);
head.next.next = new node(3);
head.next.next.next = new node(4);
head.next.next.next.next = new node(5);

const n=4;
const nthnodefromend=findnthnode(head,n);
console.log((nthnodefromend));

//     Time complexity: O(n), where n is the number of nodes in the list. We traverse the list twice — once for moving the firstpointer n steps ahead, and once for moving both pointers until the end.
// Space Complexity:
// Space complexity: O(1) since we only use a constant amount of extra space for the pointers.
</aside>

<aside>
💡 **Question 3**

Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

**Example 1:**

```
Input:
N = 2
LinkedList: 1->2->3->4->5->6->7->8->9
Output:8
Explanation:In the first example, there
are 9 nodes in linked list and we need
to find 2nd node from end. 2nd node
from end is 8.

class node{  
  constructor(value){  
this.value=value;
this.next=null;
}
}
function findnthnode(head,n){
let firstpointer=head;
let secondpointer=head;
//moving the node towards the null one step at the time
for(let i=0;i<n;i++){
//if the number of nodes we have lesser than the nth node from end return null    
    if(firstpointer===null){
    return null;
}
firstpointer=firstpointer.next;
}
//if until first reaches the null then we move the both the pointer one step at a time
while(firstpointer!==null){
    firstpointer=firstpointer.next;
    secondpointer=secondpointer.next;
}
return secondpointer;
}
const head = new node(1);
head.next = new node(2);
head.next.next = new node(3);
head.next.next.next = new node(4);
head.next.next.next.next = new node(5);

const n=4;
const nthnodefromend=findnthnode(head,n);
console.log((nthnodefromend));

//     Time Complexity: O(n), where n is the number of nodes in the list. We traverse the list twice: once to move the firstPointer n steps and once to move both pointers until the end.
// Space Complexity: O(1), since we are using only a constant amount of extra space (two pointers).
</aside>

<aside>

💡 **Question 7**

Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.
//create the  node
class node{
    constructor(data){
    this.data=data;
    this.next=null;
}
}
// //both the the pointer are move one node at a time
// if(!secondpointer){
//  return firstpointer;
// }
function mergelist(first,second){
//if there is no second pointer is available then feturn the first pointer
    if(!second){
    return first;
}
//assign the pointer to the first and second variable
let firstpointer=first;
let secondpointer=second;

while(firstpointer&&secondpointer){
//move the both the pointer one node at a time
    let firstpointernext=firstpointer.next;
let secondpointernext=secondpointer.next;
//system:pointed towards the second one from the first one
firstpointer.next=secondpointer;
//if there is end of secondpointer then return the firstpointer
secondpointer.next=firstpointernext;

firstpointer=firstpointernext;
secondpointer=secondpointernext;
}

if(secondpointer){
//verify that if second pointer have the remaining element then we need to connect with the first one  
    firstpointer.next=secondpointer;
}
second=null;
return first;
}
// create the first list: 
let first = new node(5);
first.next = new node(7);
first.next.next = new node(17);
first.next.next.next = new node(13);
first.next.next.next.next = new node(11);

// create the second list: 
let second = new node(12);
second.next = new node(10);
second.next.next = new node(2);
second.next.next.next = new node(4);
second.next.next.next.next = new node(6);

// Merge the lists
 first = mergelist(first, second);

 // Print the merged list
 let current = first;
 while (current) {
 console.log(current.data);
   current = current.next;
}





</aside>

<aside>
💡 **Question 8**

Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.

> A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.
> 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d30bbf79-b1eb-4ba4-b23e-6d3f27ccdfe5/Untitled.png)

class node{
    constructor(data){
    this.data=data;
    this.next=null;
}
}

//assign the slow and fast pointer 
//both are moving different spped
function circularornot(head){
       // Handle edge case when head is null or list has only one node
    if (!head || !head.next) {
        return false;
    }
//we traverse the head  
    let slow=head;
    let fast=head;
while(fast&&fast.next){
    if(slow===fast){
        return true;
    }
    slow=slow.next;
    fast=fast.next.next;
}
return false;
}

//create the circular linked linked list
let head = new node(1);
head.next = new node(2);
head.next.next = new node(3);
head.next.next.next = new node(4);
head.next.next.next.next =new node(6);
head.next.next.next.next.next = head.next.next; // Creates a cycle


// Print the values of the circular linkedlist
console.log(circularornot(head));

//     Time Complexity: O(n), where n is the number of nodes in the list. In the worst case, both pointers traverse the list once.
// Space Complexity: O(1), as we are using only two pointers and no additional data structures.
</aside>









