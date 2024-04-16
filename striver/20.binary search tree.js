
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

//converted sorted array into the binary search tree


'use strict';
function Treenode(val){
    this.val=val;
    this.left=null;
    this.right=null;
}
var sortedarraytolist=function(nums){
    if(!nums||!nums.length){
        return null;
    }
//find the root of the value then build the left and right tree
function buildbst(start,end){
    if(start>end){
        return null;
    }
    const mid=Math.floor((start+end)/2);
    const node=new Treenode(nums[mid]);

    node.left=buildbst(start,mid-1);
    node.right=buildbst(mid+1,end);

    return node;
}
return buildbst(0,nums.length-1);
}


const nums=[1,2,3,4,5];

//convert sorted array to balanced BST
const root=sortedarraytolist(nums);

function inordertraversal(root){
    if(root){
        inordertraversal(root.left);
        console.log(root.val);
        inordertraversal(root.right);
    }
}
inordertraversal(root);


//build the bst from the preorder
function Treenode(val){
    this.val=val;
    this.left=null;
    this.right=null;
}



var bstfrompreorder=function(preorder){
    if (!preorder || preorder.length === 0) {
        return null;
    }
function buildbst(preorder,start,end){
    if (start > end) {
        return null;
    }
    const root=new Treenode(preorder[start]);
    //get the index of the value of 
    let i;
    for(i=start+1;i<=end;i++){
        if(preorder[i]>root.val){
            break;
        }
    }
    //build the tree
    root.left=buildbst(preorder,start+1,i-1);
    root.right=buildbst(preorder,i,end);
     
    return root;
}
return buildbst(preorder,0,preorder.length-1);
}


const preorder=[8,5,1,7,10,12];
const root=bstfrompreorder(preorder);

function inordertraveral(root){
    if(root){
        inordertraveral(root.left);
        console.log(root.val);
        inordertraveral(root.right);
    }
}
inordertraveral(root);


//verify the bst or not
'use strict';
function Treenode(val){
    this.val=val;
    this.left=null;
    this.right=null;

}

var isvalidbst=function(root){
    function inordertraversal(node,result){
        if(!node){
            return;
        }
        inordertraversal(node.left,result);
        result.push(node.val);
        inordertraversal(node.right,result);
    }
    const inorderresult=[];
    inordertraversal(root,inorderresult);
    
    for(let i=1;i<=inordertraversal.length;i++){
        if(inorderresult[i]<=inorderresult[i-1]){
            return false;
        }
    }
    return true;
}

// Construct a binary tree
const root = new Treenode(2);
root.left = new Treenode(1);
root.right = new Treenode(3);
root.right.right = new Treenode(4);
root.right.left = new Treenode(1);


// Validate if it's a valid BST
console.log(isvalidbst(root)); 

//get the lowest common ancestor

class TreeNode{
    constructor(val){
        this.val=val;
        this.left=this.right=null;
    }
}

function lca(root,p,q){
    if(root===null||p===null||q===null){
        return null;
    }

  //if p and q are lesser than the root value
  if(p.val>root.val&&q.val>root.val){
    return lca(root.left,p,q);
}

    //if p and q are greater than the root value
    if(p.val>root.val&&q.val>root.val){
        return lca(root.right,p,q);

    }

    //if either p or q both are the left and right sub tree
    return root;

}

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

let p = root.left;
let q = root.left.right;

console.log(lca(root, p, q).val);

//Find the inorder predecessor/successor of a given Key in BST
class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}



function findpredecessorandsuccessor(root,key){
    let predecessor=null;
    let successor=null;

while(root){

//
    if(root.val===key){
        //predecessor is present in the rightmost in the left subtree 
        if(root.left){
            predecessor=root.left;
            while(predecessor.right){
                predecessor=predecessor.right
            }
        }
        //succesor is present in the lefttmost in the right subtree 
        if(root.right){
            successor=root.right;
            while(successor.left){
                successor=successor.left;
            }
        }
        break;
    }


    else if(root.val>key){
        successor=root;
        root=root.left;
    }

    else{
        predecessor=root;
        root=root.right;
    }

}
    return {predecessor,successor};
}

let root = new TreeNode(20);
root.left = new TreeNode(15);
root.right = new TreeNode(25);
root.left.left = new TreeNode(10);
root.left.right = new TreeNode(17);
root.right.left = new TreeNode(23);
root.right.right = new TreeNode(30);

let key=17;
let {predecessor,successor}=findpredecessorandsuccessor(root,key);

console.log("Predecessor:", predecessor ? predecessor.val : null); 
console.log("Successor:", successor ? successor.val : null); 























