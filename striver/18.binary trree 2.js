//Level order Traversal / Level order traversal of binary tree	

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
class Solution{
    levelorder(root){
        const queue=[];
        const wraplist=[];

        if(!root){
            return wraplist;
        }
        queue.push(root);
        while(queue.length>0){
            //tp:push the left and right child of the current node get the answer
            if(queue[0].left!==null){
                queue.push(queue[0].left);
            }
            if(queue[0].right!==null){
                queue.push(queue[0].right);
            }
            wraplist.push(queue.shift().val);
        }     
        return wraplist;
    }
}

//Example usage:
const solution = new Solution();
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(solution.levelorder(root));

//Height of a Binary Tree		
	

//Diameter of Binary Tree		
	

//Check if the Binary tree is height-balance…		
	

//LCA in Binary Tree		
	

//Check if two trees are identical or not		
	

//Zig Zag Traversal of Binary Tree		
	

//Boundary Traversal of Binary Tree
