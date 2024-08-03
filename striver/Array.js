


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