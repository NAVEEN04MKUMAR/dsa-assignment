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


// Example usage:
let root = new TreeNode(8);
root.left = new TreeNode(4);
root.right = new TreeNode(12);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(14);

let key = 5;
console.log("Floor of", key, "is", floor(root, key)); 
