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



//construct a binary tree from a inorder and postorder




