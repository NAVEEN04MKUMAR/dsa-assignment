
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
	

//Bottom View of Binary Tree		
	

//Top View of Binary Tree		
	

//Preorder inorder postorder in a single traversal


//Vertical order traversal		
	

//Root to Node Path in Binary Tree


//max width of the tree
