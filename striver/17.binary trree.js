
//Inorder Traversal		
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
	

//Postorder Traversal		
	

//Morris Inorder Traversal		
	

//Morris Preorder Traversal		


//LeftView Of Binary Tree		
	

//Bottom View of Binary Tree		
	

//Top View of Binary Tree		
	

//Preorder inorder postorder in a single traversal


//Vertical order traversal		
	

//Root to Node Path in Binary Tree


//max width of the tree
