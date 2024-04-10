//max sum path
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


class Solution {
    constructor(){
        //assign maxi to the minimum possile integer value
        this.maxi=Number.MIN_SAFE_INTEGER;
    }
    findmaxpathsum(root,maxi){
        if(root===null){
            return 0;
        }
//calculate the path sum for the left and right subtree
        const leftmaxpath=Math.max(0,this.findmaxpathsum(root.left,maxi));
        const rightmaxpath=Math.max(0,this.findmaxpathsum(root.right,maxi));

        //update the overall maximum path sum including the current node        
        this.maxi=Math.max(this.maxi,leftmaxpath+rightmaxpath+root.data);

        //return the maximum sum considering only one branch(either left or right)
        return Math.max(leftmaxpath,rightmaxpath)+root.data;
    }
    //function to find the maximum path sum for the entire binary tree
    maxpathsum(root){
        this.findmaxpathsum(root);
        return this.maxi;
    }
}
// Creating a sample binary treea
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);
root.left.right.right.right = new Node(7);

// Creating an instance of the Solution class
const solution = new Solution();

// Finding and printing the maximum path sum
const maxPathSum = solution.maxpathsum(root);
console.log("Maximum Path Sum:", maxPathSum);






//construct a binary tree from a inorder and preorder
class Treenode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}


class Solution {
    buildtree(preorder,inorder){
        //store inorder in the map
        const inmap=new Map();
        //populate the map with indices of elements in the inorder traversal
        inorder.forEach((val,index) => {
            inmap.set(val,index);
        });

        const root=this.buildtreehelper(preorder,0,preorder.length-1,inorder,0,inorder.length-1,inmap);
        return root;

    }
    buildtreehelper(preorder,prestart,preend,inorder,instart,inend,inmap){
        if(prestart>preend||instart>inend){
            return null;
        }
        //
        const root=new Treenode(preorder[prestart]);
        //find index
        const inroot=inmap.get(root.val);
        //count number of left subtree
        const numsleft=inroot-instart;

//build the left and right subtree        
        root.left=this.buildtreehelper(preorder,prestart+1,prestart+numsleft,inorder,instart,inroot-1,inmap);
        root.right=this.buildtreehelper(preorder,prestart+numsleft+1,preend,inorder,inroot+1,inend,inmap);
        return root;
    }
}
//verify the after construct the tree get the inorder 
function printinorder(root){
    if(!root){
        return;
    }
    printinorder(root.left);
    console.log(root.val+" ");
    printinorder(root.right);
}

function printarray(array){
    array.forEach((element)=>{
        console.log(element+"");
    });
    console.log();
}


function main(){
    const inorder=[9,3,15,20,7];
    const preorder=[3,9,20,15,7];

    console.log("inorder array:");
    printarray(inorder);

    console.log("preorder array:");
    printarray(preorder);

    const sol=new Solution();
    const root=sol.buildtree(preorder,inorder);
    console.log("inorder of unique binary tree created:");
    printinorder(root);    
}
main();

//convert binary tree into the flaten linkedlist
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  //thought process:
  function flatten(root){
   //initially assign the value of null
    let prev=null;
    function traverse(node){
        
        if(!node)
        return;
//we traverse the node from right and left hand side then untill 
//we find the node have the bothchild are empty 
        traverse(node.right);
        traverse(node.left);
//whatever left child we have then we pass this one with the or convert into the to become the right hand child
        node.right=prev;
        node.left=null;
        prev=node;

    }
    traverse(root);
  }

 function printflattenedlist(root){
    while(root.right!==null){
        process.stdout.write(root.data+"->");
        root=root.right;
    }
    process.stdout.write(root.data.toString());
  }

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right = new Node(5);
root.right.right = new Node(6);
root.right.right.left = new Node(7);

flatten(root);
printflattenedlist(root);

































//construct a binary tree from a inorder and postorder
//doubt
class Treenode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}


class Solution {
    buildtree(inorder,postorder){
        //store inorder in the map
        const inmap=new Map();
        //populate the map with indices of elements in the inorder traversal
        inorder.forEach((val,index) => {
            inmap.set(val,index);
        });

        const root=this.buildtreehelper(inorder,0,inorder.length-1,postorder,0,postorder.length-1,inmap);
        return root;

    }
    buildtreehelper(inorder,instart,inend,postorder,poststart,postend,inmap){
        if(instart>inend||poststart>postend){
            return null;
        }
        //
        const root=new Treenode(postorder[postend]);
        // if(root==null){
            //find index
        const inroot=inmap.get(root.val);
        if (inroot === undefined) {
            throw new Error("Invalid input: Inorder and postorder arrays do not correspond to a valid binary tree.");
        }
        //count number of left subtree
        const numsleft=inroot-instart;

//build the left and right subtree        
        root.left=this.buildtreehelper(inorder,instart,inroot-1,postorder,poststart+numsleft-1,inmap);
        root.right=this.buildtreehelper(inorder,inroot+1,inend,postorder,poststart+numsleft,postend-1,inmap);

        // }
        
        return root;
    }
}
//verify the after construct the tree get the inorder 
function printinorder(root){
    if(!root){
        return;
    }
    printinorder(root.left);
    console.log(root.val+" ");
    printinorder(root.right);
}

function printarray(array){
    array.forEach((element)=>{
        console.log(element+"");
    });
    console.log();
}


function main(){
    const inorder=[9,3,15,20,7];
    const postorder=[9,15,7,20,3];

    console.log("inorder array:");
    printarray(inorder);

    console.log("postorder array:");
    printarray(postorder);

    const sol=new Solution();
    const root=sol.buildtree(inorder,postorder);
    console.log("inorder of unique binary tree created:");
    printinorder(root);    
}
main();




