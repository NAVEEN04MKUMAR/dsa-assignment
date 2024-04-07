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

class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

class Solution{
    lca(root,p,q){
        if(!root||root===p||root===q){
            return root;
        }
        //we search the left and right subtree 
        const left=this.lca(root.left,p,q);
        const right=this.lca(root.right,p,q);
       //if the one of the subtrees return null we returnthe other one
        if(!left){
            return right;
        }else if(!right){
            return left;
        }else{
            return root;
        }

    }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const solution3 = new Solution();
const p=root.left.left;
const q=root.left.right;
const lca = solution3.lca(root, p,q);
// console.log(solution3.lcs(tree,p,q));
console.log(lca.val); 
 // Output: false

//height of the binary tree


//diameter of the binary tree


//Check if two trees are identical or not
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}


function isidentical(node1,node2){
      if(node1===null&&node2===null)
      return true;
      else if(node1===null||node2===null)
      return false;
    return (node1.data===node2.data)&&isidentical(node1.left,node2.left)&&isidentical(node1.right,node2.right);
}

function newNode(data) {
    let node = new TreeNode(data);
    node.left = null;
    node.right = null;
    return node;
}

let root1 = newNode(1);
root1.left = newNode(2);
root1.right = newNode(3);
root1.right.left = newNode(4);
root1.right.right = newNode(5);

let root2 = newNode(1);
root2.left = newNode(2);
root2.right = newNode(3);
root2.right.left = newNode(4);
root2.right.right = newNode(5);


if (isidentical(root1, root2))
    console.log("Two Trees are identical");
else
    console.log("Two trees are non-identical");
	

//Zig Zag Traversal of Binary Tree		
	

//Boundary Traversal of Binary Tree

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
//leaf node
function isleaf(root){
    return !root.left&&!root.right;
}
//go to left hand side if not exist go to right hand side
function addleftboundary(root,res){
    let cur=root.left;
    while(cur!==null){
        if(!isleaf(cur)) res.push(cur.data);
        cur=cur.left!==null?cur.left:cur.right;
    }
}
//go to right hand side if not exist go to left hand side
function addrightboundary(root,res){
    let cur=root.right;
    let tmp=[];
    while(cur!==null){
        if(!isleaf(cur)) res.push(cur.data);
        cur=cur.right!==null?cur.right:cur.left;
    }
    for(let i=tmp.length-1;i>=0;i--){
        res.push(tmp[i]);
    }
}


function addleaves(root,res){
    if(isleaf(root)){
        res.push(root.data);
        return;
    }
    if(root.left) addleaves(root.left,res);
    if(root.right) addleaves(root.right,res);
}


function printboundary(node){
    const ans=[];
    if(!isleaf(node))ans.push(node.data);
    addleftboundary(node,ans);
    addleaves(node,ans);
    addrightboundary(node,ans);
    return ans;
}

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);
root.left.left.left = new Node(4);
root.left.left.left.left = new Node(5);
root.right = new Node(7);
root.right.right = new Node(8);
root.right.right.right = new Node(9);
root.right.right.right.left = new Node(10);

const boundaryTraversal = printboundary(root);

console.log("The Boundary Traversal is : ");
console.log(boundaryTraversal.join(" "));



