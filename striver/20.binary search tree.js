
// Populating Next Right Pointers in Each Node
'use strict';
function Node(val, left,right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}


var connect=function(root){
    if(!root)
    return null;

    let levelstart=root;

while(levelstart!==null){
    let curr=levelstart;

while(curr!==null){
    //connect the left child to left child
    if(curr.left!==null){
        curr.left.next=curr.right;
    }
    if(curr.right!==null&&curr.next!==null){
        curr.right.next=curr.next.left;
    }

    curr=curr.next;//move ne node to another node same level
}
levelstart=levelstart.next;//move the one level to the another level
    }
    return root;
};


// Example usage:
// Create a sample perfect binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);
root.left.right.left = new Node(10);
root.left.right.right = new Node(11);
root.right.left.left = new Node(12);
root.right.left.right = new Node(13);
root.right.right.left = new Node(14);
root.right.right.right = new Node(15);

// Connect the next pointers
connect(root);

// Output the next pointers
console.log(root);




//Search in a Binary Search Tree

'use strict';
function Treenode(val){
    this.val=val;
    this.left=null;
    this.right=null;
}

var searchBST=function (root,val){
    if(!root||root.val===val){
        return root;
    }
    //compare the gven value with the root value
    //then go to left or right subtree 
    if(val<root.val){
        return searchBST(root.left,val);
    }else{
        return searchBST(root.right,val);
    }
}

const root=new Treenode(4);
root.left=new Treenode(2);
root.right=new Treenode(7);
root.left.left=new Treenode(1);
root.left.right=new Treenode(3);

const val=1;
const result=searchBST(root,val);
console.log(result);


















