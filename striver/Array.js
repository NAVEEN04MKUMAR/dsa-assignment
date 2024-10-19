


//1.set the mtrix zero

//brute force method:
//set -1 throughout row and column if any element contains the 0
function zeromatrix(matrix,n,m){
    for( let i=0;i<n;i++){
         for( let j=0;j<m;j++){
             if(matrix[i][j]===0){
              markrow(matrix,n,m,i);
              markcolumn(matrix,n,m,j);
             }
        }
    }
    //wherever -1 is present then we mark it up by 0
     for( let i=0;i<n;i++){
         for( let j=0;j<m;j++){
             if(matrix[i][j]==-1){
                matrix[i][j]=0;
             }
        }
    }
    return matrix;
    
}

const matrix=[
    [1,1,1],
    [1,0,1],
    [1,1,1],
    ];
    
    const n=matrix.length;
    const m=matrix[0].length;
    const ans=zeromatrix(matrix,n,m);
    
//assign the -1 through the column if 0 is present

function markrow(matrix,n,m,i){
         for( let j=0;j<m;j++){
             if(matrix[i][j]!==0){
                 matrix[i][j]=-1;
        }
    }
}
//assign the -1 through the row if 0 is present
function markcolumn(matrix,n,m,j){
         for( let i=0;i<n;i++){
             if(matrix[i][j]!==0){
                 matrix[i][j]=-1;
        }
    }
}
console.log("The Final matrix is: ");
  for (let i = 0; i < n; i++) {
    console.log(ans[i].join(" "));
  }
  
//time complexity:
//   (no of rows*no of col)(no of rows+no of col)+(no of rows*no of col)
//   1-traverse the each cell where the find 0
//   2-assigning the -1 to the if 0 is present
//   3-assigning the no of rows and columns are the 0 from -1
  

//better approach
  function zeromatrix(matrix){
  const n=matrix.length;
  const m=matrix[0].length;
  const row=new Array(n).fill(0);
  const col=new Array(m).fill(0);
  
  //Traverse the matrix
  for(let i=0;i<n;i++){
      for(let j=0;j<m;j++){
          if(matrix[i][j]===0){
              row[i]=1;
              col[j]=1;
          }
      }
  }
  //if array contain the 1 then we assign the entire col or row assign the zero 
  for(i=0;i<n;i++){
      for(j=0;j<m;j++){
          if(row[i]||col[j]){
              matrix[i][j]=0;
          }
      }
  }
  
 return matrix; 
}

const matrix=[
    [1,1,1],
    [1,0,1],
    [1,1,1]
];
const ans=zeromatrix(matrix);

console.log("finalmatrix");
for(const row of ans){
    console.log(row.join(" "));
}
//time complexity for entire row and column we traverse that will take the 2(m*);
//space:o(m)+o(n)

//optimal approach
function zeromatrix(matrix){
    const n=matrix.length;
const m=matrix[0].length;

col0=1;
for(let i=0;i<n;i++){
    for (let j=0;j<m;j++){
        if(matrix[i][j]===0){
            //mark ith row
            matrix[i][0]=0;
            //mark j th column
            if(j!==0){
                matrix[0][j]=0;
            }else{
                col0=0;
            }
        }
    }
}


//mark the zero for the (1,1) to (n-1,m-1) if 1st row and 1st column have the zero
for(let i=1;i<n;i++){
    for (let j=1;j<m;j++){
        if(matrix[i][j]!==0){
            //check for col and row:
            if(matrix[i][0]===0||matrix[0][j]===0){
                matrix[i][j]=0;
            }
        }
    }
}
//mark the all the element from 1st row is zero

    if(matrix[0][0]===0){
        for(let j=0;j<m;j++){
            matrix[0][j]=0;
        }
    }
    
    //mark the 1st col is the zero
    if(col0===0){
        for(let i=0;i<n;i++){
            matrix[i][0]=0;
        }
    }

    return matrix;
}


const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans = zeromatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}    

//space complexity is constant for this one


2.Pascals triangle:

function nCr(n, r) {
    let res = 1;

    // calculating nCr:
    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
    }
    return res;
    }

    function pascalTriangle(r, c) {
    const element = nCr(r - 1, c - 1);
    return element;
}

const r = 5; // row number
const c = 3; // col number
const element = pascalTriangle(r, c);
console.log(`The element at position (${r},${c}) is: ${element}`);
  
// Time Complexity: O(c), where c = given column number.
// Reason: We are running a loop for r times, where r is c-1.
// Space Complexity: O(1) as we are not using any extra space.
//Given the row number n. Print the n-th row of Pascal’s triangle.

function pascalTriangle(n) {
    let ans = 1;
    console.log(ans + " "); // printing 1st element
  
    //Printing the rest of the part:
    for (let i = 1; i < n; i++) {
      ans = ans * (n - i);
      ans = ans / i;
      console.log(ans + " ");
    }
    console.log("n");
}
  
const n = 5;
pascalTriangle(n);


// Time Complexity: O(N) where N = given row number. Here we are using only a single loop.
// Space Complexity: O(1) as we not using any extra space.

//get the row of thr triangle

function nCr(n, r) {
    let res = 1;
  
    // calculating nCr:
    for (let i = 0; i < r; i++) {
      res = res * (n - i);
      res = res / (i + 1);
    }
    return parseInt(res);
}
  
function pascalTriangle(n) {
    const ans = [];
  
    //Store the entire pascal's triangle:
    for (let row = 1; row <= n; row++) {
      const tempLst = []; // temporary list
      for (let col = 1; col <= row; col++) {
        tempLst.push(nCr(row - 1, col - 1));
      }
      ans.push(tempLst);
    }
    return ans;
}
  
const n = 5;
const ans = pascalTriangle(n);
for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].join(" ") + "n");
}
// Time Complexity: O(n*n*r) ~ O(n3), where n = number of rows, and r = column index.
// Reason: The row loop will run for approximately n times. And generating a row using the naive approach of variation 2 takes O(n*r) time complexity.
// Space Complexity: In this case, we are only using space to store the answer. That is why space complexity can be still considered as O(1).


//get the enetire triangle

function generateRow(row) {
    let ans = 1;
    let ansRow = [1]; // inserting the 1st element
  
    // calculate the rest of the elements:
    for (let col = 1; col < row; col++) {
      ans = ans * (row - col);
      ans = ans / col;
      ansRow.push(ans);
    }
    return ansRow;
}
  
function pascalTriangle(n) {
    let ans = [];

    // store the entire pascal's triangle:
    for (let row = 1; row <= n; row++) {
        ans.push(generateRow(row));
    }
    return ans;
}
  
let n = 5;
let ans = pascalTriangle(n);
for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].join(" "));
}

// Time Complexity: O(n2), where n = number of rows(given).
// Reason: We are generating a row for each single row. The number of rows is n. And generating an entire row takes O(n) time complexity.
// Space Complexity: In this case, we are only using space to store the answer. That is why space complexity can still be considered as O(1).



//find the permutation for the next one
function nextgreaterpermutation(A){    
let n=A.length;
let ind=-1;
//find break point where the minimum element from the rhs to lhs
for(let i=n-2;i>=0;i--){
    if(A[i]<A[i+1]){
        ind=i;
        break;
    }
}
// console.log("Breakpoint index:", ind);
//special case:
if(ind===-1){
    //reverse the whole array that is the 
    A.reverse();
    return A;
}
//find the next greater element compare with the A[i] then swap it 
for(let i=n-1;i>ind;i--){
    if(A[i]>A[ind]){
        [A[i],A[ind]]=[A[ind],A[i]];
        break;
    }
}
//after indices remaioning element we should reverse to get the next greatest permutation
let left = ind + 1;
    let right = n - 1;
    while (left < right) {
        [A[left], A[right]] = [A[right], A[left]];
        left++;
        right--;
    }return A;
}
let A=[2,1,5,4,3,0,0];
// console.log("Initial array:", A);
let ans=nextgreaterpermutation(A);
console.log("Array after swapping:", A)

console.log("The next permutation is: [" + ans.join(" ") + "]");


//permutation using backtracking:
//backtracking:try different option and undoing them if we gop to the dead end
//it is the solve the eveery possivble solution where the in order to solve a compututational problem
//leafnode recursion call start
//C:different Checkpoints
//tn:last nodes there is no further recursive call

//print the all the permutations:
//it will better if try to understand clearly
function permute(nums){
    const result=[];
    function recurpermute(index){
        if(index===nums.length){
            result.push([...nums]);
            return;
        }

//permutation it is starting from any number ex:if 2 then start with 1 or start with 3         
        for(let i=index;i<nums.length;i++){
            swap(index,i);//swap the current index with the ith element
            recurpermute(index+1);//recurse the next index
            swap(index,i);//swap back to original index
        }
        
    }
    function swap(i,j){
    [nums[i],nums[j]]=[nums[j],nums[i]];
  }
  recurpermute(0);
  return result;
  
}

const nums=[1,2,3];
const permutations=permute(nums);

console.log("all permutations are");
permutations.forEach(perm => {
    console.log(perm.join(' '));
});
o/p:
1 2 3
1 3 2
2 1 3
2 3 1
3 2 1
3 1 2

//Find maximum sum then 
//Brute force method

function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // subarray = arr[i.....j]
            let sum = 0;

            //add all the elements of subarray:
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }

            maxi = Math.max(maxi, sum);
        }
    }

    return maxi;
}

const arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log(`The maximum subarray sum is: ${maxSum}`);

//better solution

function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            // current subarray = arr[i.....j]

            //add the current element arr[j]
            // to the sum i.e. sum of arr[i...j-1]
            sum += arr[j];

            maxi = Math.max(maxi, sum); // getting the maximum
        }
    }

    return maxi;
}

let arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length;
let maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);

//optimal solution

function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);




//separe the 0 1 ,and 2 
//thoug process:push the code from mid to right if 2's ,push tpo left if it is 0's then finally mid only i's
function sortColors(arr){
    let low=0;high=arr.length-1;mid=0;
    console.log('assigned pointer');

while(mid<=high){
   if(arr[mid]===0){
    [arr[low],arr[mid]]=  [arr[mid],arr[low]];
    low++;
    mid++;
   }else if(arr[mid]===1){
    mid++;
   }else{
        [arr[high],arr[mid]]=  [arr[mid],arr[high]];
        high--;
   }
}
}
arr=[2,0,2,1,1,0];
n=arr.length;
sortColors(arr,n);
console.log(arr.join(" "));
//tc:o(n);
//sc:(1);

//Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//Input: prices = [7,1,5,3,6,4]
//Output: 5
///Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

    function maxProfit(prices) {  
    let max=0;
    console.log('max',max);
    for(let i=0;i<prices.length;i++){
    for(let j=i+1;j<prices.length;j++){
        if(prices[j]>prices[i]){
            max=Math.max(prices[j]-prices[i],max);
        }

    }
};
return max;
}
let arr=[7,1,5,3,6,4];
let maxp=maxProfit(arr);
console.log("Max profit is: " + maxp);
//t.c:O(n^2);
//s.c(1);

//better approach:
//we are assign the minimum value 1st then we finde difference with the next element,beauty is that if we find the minimum value at the beginning then there is no need to compre wit the next element 
//here at beginning we have the 1 so there no minimum value availbale at the next then there is no need to make the difference
function maxProfit(prices) {  
    let max=0;
    let min=Infinity;
    console.log('max',max);
for(let i=0;i<prices.length;i++){
           min=Math.min(min,prices[i]);
            max=Math.max(max,prices[i]-min);

};
return max;
}
let arr=[7,1,5,3,6,4];
let maxp=maxProfit(arr);
console.log("Max profit is: " + maxp);
//t.c:O(n);
//s.c(1);







