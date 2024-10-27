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
	 
//Reverse a LinkedList in groups of size k.		
	
//Check if a LinkedList is palindrome or not…		
	
//Find the starting point of the Loop of Lin…		
	
//Flattening of a LinkedList
