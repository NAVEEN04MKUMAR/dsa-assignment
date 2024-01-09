
//Inorder Traversal

//Inorder traversal (left-current-right): This approach visits the current node after visiting all nodes inside the left subtree, 
//but before visiting any node within the right subtree.
class Node{
    constructor(value) {
        this.data=value;
        this.left=null;
        this.right=null;
    }
}

function inorder(node){
    if (node=== null) {
        return;
    }
    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
}

 const root = new Node(1);
 root.left= new Node(2);
 root.right= new Node(3);
 root.left.left= new Node(4);
 root.left.right= new Node(5);
 root.right.left= new Node(6);
 root.right.right= new Node(7);
 root.left.left.left= new Node(8);
 root.left.left.right= new Node(9);
 root.left.right.left= new Node(10);
 root.left.right.right= new Node(11);
 root.right.left.left= new Node(12);
 root.right.left.right= new Node(13);
 root.right.right.left= new Node(14);
 root.right.right.right= new Node(15);

console.log("inorder")
inorder(root);

//Preorder Traversal
//preorder traversal is a type of tree traversal that visits the root node first, followed by the left subtree, and then the right subtree.
//It is called a preorder traversal because the root node is always visited before any of its child nodes.
class Node{
constructor(value){
    this.data=value;
    this.left=null;
    this.right=null;
}
}

function preorder(node){
if (node=== null) {
    return;
}
console.log(node.data);
preorder(node.left);
preorder(node.right);
}

const root = new Node(1);
root.left= new Node(2);
root.right= new Node(3);
root.left.left= new Node(4);
root.left.right= new Node(5);
root.right.left= new Node(6);
root.right.right= new Node(7);
root.left.left.left= new Node(8);
root.left.left.right= new Node(9);
root.left.right.left= new Node(10);
root.left.right.right= new Node(11);
root.right.left.left= new Node(12);
root.right.left.right= new Node(13);
root.right.right.left= new Node(14);
root.right.right.right= new Node(15);
console.log("preoder");
preorder(root);

//Postorder Traversal		
class Node{
    constructor(value) {
        this.data=value;
        this.left=null;
        this.right=null;
    }
}

function postorder(node){
    if (node == null) {
        return;
      }
     
    postorder(node.left);
    postorder(node.right);
    console.log(node.data);

}

 const root = new Node(1);
 root.left= new Node(2);
 root.right= new Node(3);
 root.left.left= new Node(4);
 root.left.right= new Node(5);
 root.right.left= new Node(6);
 root.right.right= new Node(7);
 root.left.left.left= new Node(8);
 root.left.left.right= new Node(9);
 root.left.right.left= new Node(10);
 root.left.right.right= new Node(11);
 root.right.left.left= new Node(12);
 root.right.left.right= new Node(13);
 root.right.right.left= new Node(14);
 root.right.right.right= new Node(15);
postorder(root);

//Morris Inorder Traversal		
	





//Morris Preorder Traversal		









//LeftView Of Binary Tree	
class Node{
    constructor(value) {
        this.data=value;
        this.left=null;
        this.right=null;
    }
}
var root;
var maxlevel=0;

function leftview(node,level){
    if (node == null) {
        return;
      }
     
      if(maxlevel<level){
        console.log(node.data);
        maxlevel=level;
      }
      //call the recursive the left and right hand side
      leftview(node.left,level+1);
      leftview(node.right,level+1);

}
function leftviewutil(){
    leftview(root,1);
}

 root = new Node(1);
 root.left= new Node(2);
 root.right= new Node(3);
 root.left.left= new Node(4);
 root.left.right= new Node(5);
 root.right.left= new Node(6);
 root.right.right= new Node(7);
 root.left.left.left= new Node(8);
 root.left.left.right= new Node(9);
 root.left.right.left= new Node(10);
 root.left.right.right= new Node(11);
 root.right.left.left= new Node(12);
 root.right.left.right= new Node(13);
 root.right.right.left= new Node(14);
 root.right.right.right= new Node(15);
leftviewutil();

//Bottom View of Binary Tree		

class Node{
    constructor(value) {
        this.data=value;
        this.left=null;
        this.right=null;
    }
}
var root;
var maxlevel=0;

function leftview(node,level){
    if (node == null) {
        return;
      }
     
      if(maxlevel<level){
        console.log(node.data);
        maxlevel=level;
      }
      //call the recursive the left and right hand side
      leftview(node.right,level+1);
      leftview(node.left,level+1);

}
function leftviewutil(){
    leftview(root,1);
}

 root = new Node(1);
 root.left= new Node(2);
 root.right= new Node(3);
 root.left.left= new Node(4);
 root.left.right= new Node(5);
 root.right.left= new Node(6);
 root.right.right= new Node(7);
 root.left.left.left= new Node(8);
 root.left.left.right= new Node(9);
 root.left.right.left= new Node(10);
 root.left.right.right= new Node(11);
 root.right.left.left= new Node(12);
 root.right.left.right= new Node(13);
 root.right.right.left= new Node(14);
 root.right.right.right= new Node(15);
leftviewutil();

//Top View of Binary Tree using the level orde traversal

class Node{
    constructor(value) {
        this.data=value;
        this.left=null;
        this.right=null;
        this.hd=0;
    }
}


function topview(root){
    if(root==null)
    return;
   let queue=[];
   let map=new Map();
   let hd=0;
   root.hd=hd;
   queue.push(root);

   //Bfs traversal to compute the top view
   while(queue.length!=0){
    root=queue[0];
    hd=root.hd;
//add to map if not present
    if(!map.has(hd))
    map.set(hd,root.data);

if(root.left){
    root.left.hd=hd-1;
    queue.push(root.left);

}

if(root.right){
    root.right.hd=hd+1;
    queue.push(root.right);
}

//dequue the current one
queue.shift();

   }
// sort the nodes by horizontal distance
let arr = Array.from(map);
arr.sort(function (a, b) { return a[0] - b[0]; });

// print top view nodes
for (let [key, value] of arr.values()) {
    console.log(value+"");
        // document.write(value + " ");
    }

}

let root = new Node(1);
 root.left= new Node(2);
 root.right= new Node(3);
 root.left.left= new Node(4);
 root.left.right= new Node(5);
 root.right.left= new Node(6);
 root.right.right= new Node(7);
 root.left.left.left= new Node(8);
 root.left.left.right= new Node(9);
 root.left.right.left= new Node(10);
 root.left.right.right= new Node(11);
 root.right.left.left= new Node(12);
 root.right.left.right= new Node(13);
 root.right.right.left= new Node(14);
 root.right.right.right= new Node(15);
 topview(root);

//top view using the recursion
class Node{
    constructor(value) {
        this.data=value;
        this.left=null;
        this.right=null;
    }
}


class pair{
    constructor(i,j) {
        this.first=i;
        this.second=j;
    }
}
let map=new Map();
function newnode(key){
    let node=new Node();
    node.left=null;
    node.right=null;
    node.data=key;
    return node;
}
function fillmap(root,d,l){

    if(root==null)
    return;

    if(map.get(d)==null){
        map.set(d,new pair(root.data,l));

    }
   else if(map.get(d).second>1){
        map.set(d,new pair(root.data,l));  
    }
    fillmap(root.left,d-1,l+1);
    fillmap(root.right,d+1,l+1);
}
function topview(root){

    fillmap(root,0,0);
// sort the nodes by horizontal distance
let arr = Array.from(map.keys());
arr.sort(function (a, b) { return a[0] - b[0]; });
// print top view nodes
for (let key of arr.values()) {
     console.log(map.get(key).first+ " ");
    //     document.write();
    }
   }
let root = new Node(1);
 root.left= new Node(2);
 root.right= new Node(3);
 root.left.left= new Node(4);
 root.left.right= new Node(5);
 root.right.left= new Node(6);
 root.right.right= new Node(7);
 root.left.left.left= new Node(8);
 root.left.left.right= new Node(9);
 root.left.right.left= new Node(10);
 root.left.right.right= new Node(11);
 root.right.left.left= new Node(12);
 root.right.left.right= new Node(13);
 root.right.right.left= new Node(14);
 root.right.right.right= new Node(15);
 topview(root);
	
//Preorder inorder postorder in a single traversal 09/01








//Vertical order traversal		









//Root to Node Path in Binary Tree






//max width of the tree







