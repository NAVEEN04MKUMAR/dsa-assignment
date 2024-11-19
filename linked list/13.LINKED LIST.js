status:do3,4,5,6,7,8
# Assignment Questions 13

<aside>
💡 **Question 1**

Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

**Examples:**

```
Input: list1 = 5->2->3->8
list2 = 1->7->4->5
Output: New list = 5->7->4->8

Input:list1 = 2->8->9->3
list2 = 5->3->6->4
Output: New list = 5->8->9->4
```
//define the datastructure
class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function createnewlist(head1,head2){
    let pointer1=head1;
    let pointer2=head2;
    let newhead=null;

while(pointer1!==null&&pointer2!==null){
let newnode=new node();
//when the any one of the linkedlist is null 
if(pointer1 !== null && (pointer2 === null || pointer1.data <= pointer2.data)){
    newnode.data=pointer2.data;
    pointer2=pointer2.next;
}else if(pointer2 !== null && (pointer1 === null || pointer1.data > pointer2.data)){
    newnode.data=pointer1.data;
    pointer1=pointer1.next;
}
//else{
// //compare the values from the both the linkedlist which one is bigger we need to take them
// //also skip the current element
// if(pointer1.data>pointer2.data){
//     newnode.data=pointer1.data;
//     pointer1=pointer1.next;
// }
// else{
//     newnode.data=pointer2.data;
//     pointer2=pointer2.next;
// }
}
    
        // If newhead is null, initialize it
        if (newhead === null) {
            newhead = newnode;
            tail = newnode;
        } else {
            tail.next = newnode;
            tail = newnode;
//         }
    
// newnode.next=newhead;
// newhead=newnode;
}
return newhead;
}
//create the linkedlist1

let head1=new node(1);
let node2=new node(2);
let node3=new node(3);
let node4=new node(4);
//connecet the linked list
head1.next=node2;
node2.next=node3;
node3.next=node4;

//create the linkedlist2
let head2=new node(5);
let node6=new node(6);
let node7=new node(7);
let node8=new node(8);

//connecet the linkedlist2
head2.next=node6;
node6.next=node7;
node7.next=node8;

let newhead = createnewlist(head1, head2);
let current = newhead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

</aside>

<aside>
💡 **Question 2**

Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

**Example 1:**

```
Input:
LinkedList: 
11->11->11->21->43->43->60
Output:
11->21->43->60
```

**Example 2:**

```
Input:
LinkedList: 
10->12->12->25->25->25->34
Output:
10->12->25->34
```
//
class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function removeduplicate(head){
    let current=head;
    while(current!==null&&current.next!==null){
//system:if the current and next element are equal then the directly jumped into after next element
        if(current.data===current.next.data){
            current.next=current.next.next;
        }else{
            current=current.next;
        }
    }
    return head;
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
node5.next=node6;
node6.next=node7;
node7.next=node8;


// Remove duplicates
let updatedHead = removeduplicate(head);

// Traverse and print the updated linked list
let current = updatedHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

</aside>











<aside>
💡 **Question 3**

Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

**Example 1:**

```
Input:
LinkedList: 1->2->2->4->5->6->7->8
K = 4
Output:4 2 2 1 8 7 6 5
Explanation:
The first 4 elements 1,2,2,4 are reversed first
and then the next 4 elements 5,6,7,8. Hence, the
resultant linked list is 4->2->2->1->8->7->6->5.

```

**Example 2:**

```
Input:
LinkedList: 1->2->3->4->5
K = 3
Output:3 2 1 5 4
Explanation:
The first 3 elements are 1,2,3 are reversed
first and then elements 4,5 are reversed.Hence,
the resultant linked list is 3->2->1->5->4.
```

</aside>

<aside>
💡 **Question 4**

Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

**Example:**

```
Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
Output:   3->2->1->4->5->6->9->8->7->NULL.
```

</aside>

<aside>
💡 **Question 5**

Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

**Examples**:

```
Input:   1->2->3->5->2->10, key = 2
Output:  1->2->3->5->10
```

</aside>

<aside>
💡 **Question 6**

Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

**Examples:**

Input: a: 5->10->15, b: 2->3->20

Output: 2->3->5->10->15->20

Input: a: 1->1, b: 2->4

Output: 1->1->2->4

</aside>

<aside>
💡 **Question 7**

Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

**Example:**

```
Original Linked list 10 8 4 2
Reversed Linked list 2 4 8 10
```

</aside>

<aside>
💡 **Question 8**

Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

**Example 1:**

```
Input:
LinkedList = 1 <--> 3 <--> 4
x = 3
Output:1 3
Explanation:After deleting the node at
position 3 (position starts from 1),
the linked list will be now as 1->3.

```

**Example 2:**

```
Input:
LinkedList = 1 <--> 5 <--> 2 <--> 9
x = 1
Output:5 2 9
```

</aside>
