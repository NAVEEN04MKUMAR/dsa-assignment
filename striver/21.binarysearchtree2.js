//floor value in the bst
class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

function floor(root,key){
    let floor=null;

    while(root){
        if(root.val===key){
            return root.val;
        }
    
    else if(root.val>key){
        root=root.left;
    }
    else{
        floor=root.val;
        root=root.right;
    }

}
return floor;
}


let root = new TreeNode(8);
root.left = new TreeNode(4);
root.right = new TreeNode(12);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(14);

let key = 5;
console.log("Floor of", key, "is", floor(root, key)); 

//ceil of value
//floor value in the bst
class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

function ceil(root,key){
    let ceil=null;

    while(root){
        if(root.val===key){
            return root.val;
        }
    
    else if(root.val<key){
        root=root.right;
    }
    else{
        ceil=root.val;
        root=root.left;
    }

}
return ceil;
}


// Example usage:
let root = new TreeNode(8);
root.left = new TreeNode(4);
root.right = new TreeNode(12);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(14);



let key = 5;
console.log("ceil of", key, "is",ceil(root, key)); 


//find kth smallest and largest element in the tree
class TreeNode {
    constructor(x) {
        this.val = x; 
        this.left = null; 
        this.right = null; 
    }
}


class Solution{
    reverseorder(node,counter,k,klargest){
        if (!node || counter >= k) return;
        this.reverseorder(node.right,counter,k ,klargest);
        counter++;//increment counter after visiting right subtree
        if(counter===k){
            klargest[0]=node.val;
            return;
        }
        this.reverseorder(node.left,counter,k ,klargest);
    }

    inorder(node,counter,k,ksmallest){
        if (!node || counter >= k) return;
        this.inorder(node.left,counter,k ,ksmallest);
        counter++;//increment counter after visiting left subtree
        if(counter===k){
            ksmallest[0]=node.val;
            return;
        }
        this.inorder(node.right,counter,k ,ksmallest);
    }

    findkth(root,k){
        const ksmallest=[Number.MIN_SAFE_INTEGER];
        const klargest=[Number.MIN_SAFE_INTEGER];
        let counter=0;
        this.inorder(root,counter,k ,ksmallest);
        counter=0;
        this.reverseorder(root,counter,k ,klargest);
        return [ksmallest[0],klargest[0]];
    }
}



function printInOrder(root) {
    if (root === null) {
        return;
    }
    printInOrder(root.left);
    console.log(root.val + " ");
    printInOrder(root.right);
}

// Creating a binary search tree (BST)
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(13);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(2);
root.left.left.right = new TreeNode(4);
root.left.right = new TreeNode(6);
root.left.right.right = new TreeNode(9);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(14);

console.log("Binary Search Tree:");
printInOrder(root);
console.log();

// Instantiate the Solution class
const solution = new Solution();

// Find the Kth smallest and largest elements
const k = 3;
console.log("k: " + k);
const kthElements = solution.findkth(root, k);

console.log("Kth smallest element: " + kthElements[0]);
console.log("Kth largest element: " + kthElements[1]);



