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
	
//Flattening of a LinkedList
