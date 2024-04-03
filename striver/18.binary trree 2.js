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
//approach #1
//here we travelled the everynode nth time n nodes are available then we convert this one time complexity O(n2)
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Solution{
    isbalanced(root){
        return this.dfsheight(root)!==-1;
    }


dfsheight(root){
    if(root===null)return 0;

    let leftheight=this.dfsheight(root.left);
    if(leftheight===-1)
    return -1;

    let rightheight=this.dfsheight(root.right);
    if(rightheight===-1)
    return -1;
   
    //unbalanced if difference is morethan 1 from left and right subtree  
    if(Math.abs(leftheight-rightheight>1))
    return -1;

    return Math.max(leftheight,rightheight)+1;
    
   }
  }


  
//Example usage:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.right = new TreeNode(6);
const solution = new Solution();
console.log(solution.isbalanced(tree)); // Output: false


//approach#2
//approach #2
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Solution{
    isbalanced(root){
        return this.dfsheight(root)!==-1;
    }


dfsheight(root){
    if(root===null)return 0;

    let leftheight=this.dfsheight(root.left);
    let rightheight=this.dfsheight(root.right);

    if(leftheight===-1||rightheight===-1||Math.abs(leftheight-rightheight)>1)
     return -1;
    return Math.max(leftheight,rightheight)+1;
   }
  }


// Example usage:
 const tree = new TreeNode(1);
 tree.left = new TreeNode(2);
 tree.right = new TreeNode(3);
 tree.left.left = new TreeNode(4);
 tree.left.right = new TreeNode(5);
 tree.right.right = new TreeNode(6);
 const solution2 = new Solution();
 console.log(solution2.isbalanced(tree)); // Output: false
	
//LCA in Binary Tree		
	

//Check if two trees are identical or not		
	

//Zig Zag Traversal of Binary Tree		
	

//Boundary Traversal of Binary Tree
